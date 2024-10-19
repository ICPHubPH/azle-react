import { Request, Response } from "express";
import { Bookmark } from "../../../database/entities/bookmark";
import { User } from "../../../database/entities/user";
import { httpResponseError, httpResponseSuccess } from "Helpers/response";

export default class BookmarkController {
  static async getUserBookmarks(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const data = await User.find({
        where: {
          id: request.user,
        },
        select: {
          id: true,
          bookmarks: {
            post: {
              id: true,
              title: true,
              content: true,
              thumbnail: true,
              createdAt: true,
            },
          },
        },
        relations: ["bookmarks", "bookmarks.post"],
        skip,
        take,
      });

      if (!data) {
        return httpResponseError(response, null, "Unauthorized", 401);
      }

      httpResponseSuccess(response, { bookmarks: data[0], count: data[1] });
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async createBookmark(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({ id: request.user });
      const { postId } = request.body;

      if (!user) {
        return httpResponseError(response, null, "Unauthorized", 401);
      }

      if (user.role == "admin") {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      await Bookmark.insert({
        post: {
          id: postId,
        },
        user: {
          id: request.user,
        },
      });

      const bookmark = await Bookmark.findOne({
        where: {
          user: {
            id: request.user,
          },
          post: {
            id: postId,
          },
        },
        relations: ["user", "post"],
      });

      httpResponseSuccess(response, { bookmark }, "Bookmarked successfully");
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async deleteBookmark(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({ id: request.user });

      if (!user) {
        return httpResponseError(response, null, "Unauthorized", 401);
      }

      const id = request.params.id;
      const bookmark = await Bookmark.findOne({
        where: {
          id,
        },
        select: {
          user: {
            id: true,
          },
        },
      });

      if (!bookmark) {
        return httpResponseError(response, null, "Bookmark not found", 404);
      }

      if (user.id != bookmark.user.id) {
        return httpResponseError(response, null, "Unauthorized", 401);
      }

      await Bookmark.delete({ id });

      httpResponseSuccess(response, null, "Bookmark deleted successfully");
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }
}
