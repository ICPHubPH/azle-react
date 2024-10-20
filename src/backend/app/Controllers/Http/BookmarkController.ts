import { Request, Response } from "express";
import { APIError, httpResponseError, httpResponseSuccess } from "Helpers/response";
import { Bookmark } from "../../../database/entities/bookmark";
import { User } from "../../../database/entities/user";

export default class BookmarkController {
  static async getUserBookmarks(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({
        id: request.user
      });

      
      if (!user) {
        throw new APIError("Unauthorized!", 401);
      }

      const skip = request.skip;
      const take = request.limit;

      const bookmarks = await Bookmark.findAndCount({
        where: {
          user: {
            id: user.id
          }
        },
        select: {
          id: true,
          post: {
            id: true,
            title: true,
            content: true,
            thumbnail: true,
            type: true
          }
        },
        relations: ["user", "post"],
        skip,
        take
      });

      httpResponseSuccess(response, { bookmarks });
    } catch (error) {
      if (error instanceof APIError) {
        httpResponseError(response, null, error.message, error.code);
      } else {
        httpResponseError(response, null, "Internal Server Error", 500);
      }
    }
  }

  static async isBookmarked(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({
        id: request.user
      });

      if (!user) {
        throw new APIError("Unauthorized", 401);
      }

      const { postId } = request.body;

      const bookmark = await Bookmark.findOne({
        where: {
          user: {
            id: user.id
          },
          post: {
            id: postId
          }
        },
        relations: ['post']
      });

      
      httpResponseSuccess(response, { bookmarked: !!bookmark }, null, 200);
    } catch (error) {
      if (error instanceof APIError) {
        httpResponseError(response, null, error.message, error.code);
      } else {
        httpResponseError(response, null, "Internal Server Error", 500);
      }
    }
  }

  static async createBookmark(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({ id: request.user });
      const { postId } = request.body;

      if (!user) {
        throw new APIError("Unauthorized", 401);
      }

      if (user.role == "admin") {
        throw new APIError("Forbidden", 403);
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
        relations: ["post"],
      });

      httpResponseSuccess(response, { bookmark }, "Bookmarked successfully");
    } catch (error) {
      if (error instanceof APIError) {
        httpResponseError(response, null, error.message, error.code);
      } else {
        httpResponseError(response, null, "Internal Server Error", 500);
      }
    }
  }

  static async deleteBookmark(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({ id: request.user });

      if (!user) {
        throw new APIError("Unauthorized", 401);
      }

      const {
        postId
      } = request.body;
      const bookmark = await Bookmark.findOne({
        where: {
          post: {
            id: postId
          },
          user: {
            id: user.id
          }
        }
      });

      if (!bookmark) {
        throw new APIError("Bookmark not found", 404);
      }

      await Bookmark.delete({ id: bookmark.id });

      httpResponseSuccess(response, null, "Bookmark deleted successfully");
    } catch (error) {
      if (error instanceof APIError) {
        httpResponseError(response, null, error.message, error.code);
      } else {
        httpResponseError(response, null, "Internal Server Error", 500);
      }
    }
  }
}
