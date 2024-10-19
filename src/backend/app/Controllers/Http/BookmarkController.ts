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

      const bookmark = await Bookmark.insert({
        post: {
          id: postId,
        },
        user: {
          id: request.user,
        },
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
        return response.status(401).json({
          status: 0,
          message: "Unauthorized!",
        });
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
        return response.status(404).json({
          status: 0,
          message: "Bookmarked post not found!",
        });
      }

      if (user.id != bookmark.user.id) {
        return response.status(403).json({
          status: 0,
          message: "Forbidden!",
        });
      }

      await Bookmark.delete({ id });

      return response.status(200).json({
        status: 1,
        message: "Bookmark deleted",
      });
    } catch (error) {
      response.status(500).json({
        status: 0,
        message: "Server error!",
      });
    }
  }
}
