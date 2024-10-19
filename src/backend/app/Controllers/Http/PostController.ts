import { Post } from "Database/entities/post";
import { User } from "Database/entities/user";
import { Request, Response } from "express";
import { httpResponseError, httpResponseSuccess } from "Helpers/response";
import { IsNull } from "typeorm";

export default class PostController {
  static async getAll(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const data = await Post.findAndCount({
        where: {
          archivedAt: IsNull(),
        },
        relations: ["user", "feedbacks", "feedbacks.user"],
        skip,
        take,
      });

      httpResponseSuccess(response, { posts: data[0], count: data[1] });
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async findByCategoryType(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const type = request.params.type; // type of post

      const data = await Post.findAndCount({
        where: {
          type,
          archivedAt: IsNull(),
        },
        skip,
        take,
        select: {
          id: true,
          title: true,
          content: true,
          type: true,
          thumbnail: true,
          createdAt: true,
        },
        relations: ["user", "feedbacks", "feedbacks.user"],
      });

      httpResponseSuccess(response, { posts: data[0], count: data[1] });
    } catch (error) {
      console.error(error);
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async findById(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const post = await Post.findOne({
        where: {
          id,
          archivedAt: IsNull(),
        },
        relations: ["user", "feedbacks", "feedbacks.user"],
      });

      if (!post) {
        return httpResponseError(response, null, "Post not found", 404);
      }

      httpResponseSuccess(response, { post });
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  // TODO: Thumbnail upload
  static async create(request: Request, response: Response) {
    try {
      const { title, thumbnail, type, content } = request.body;
      const user = await User.findOneBy({ id: request.user });

      if (!user) {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      if (user.role != "provider") {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      if (!user.providerVerifiedAt) {
        return httpResponseError(
          response,
          null,
          "You must be a verified provider!",
          403
        );
      }

      const post = Post.create({
        title,
        content,
        thumbnail,
        type,
        user,
      });

      await Post.save(post);

      httpResponseSuccess(response, { post }, "New post created");
    } catch (error) {
      console.error(error);
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async updateById(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const { thumbnail, title, type, content } = request.body;

      const post = await Post.findOne({
        where: {
          id,
          archivedAt: IsNull(),
        },
        select: {
          user: {
            id: true,
            role: true,
            archivedAt: true,
          },
        },
      });

      if (!post) {
        return httpResponseError(response, null, "Post not found!", 404);
      }

      if (post?.user.id != request.user && post?.user.role != "admin") {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      if (!post?.user.providerVerifiedAt) {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      const data = await Post.update(
        { id },
        { thumbnail, title, type, content }
      );

      httpResponseSuccess(response, { post: data }, "Post has been updated!");
    } catch (error) {
      console.error(error);
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async deleteById(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const post = await Post.findOne({
        where: {
          id,
        },
        select: {
          id: true,
          user: {
            id: true,
            role: true,
          },
        },
      });

      if (!post) {
        return httpResponseError(response, null, "Post not found!", 404);
      }

      if (post?.user.id != request.user && post?.user.role != "admin") {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      if (!post?.user.providerVerifiedAt) {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      const data = await Post.delete({ id });

      httpResponseSuccess(response, { post: data }, "Post has been deleted");
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  // TODO: get archived posts
}
