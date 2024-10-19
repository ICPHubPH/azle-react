import { Request, Response } from "express";
import { httpResponseError, httpResponseSuccess } from "Helpers/response";
import { Feedback } from "../../../database/entities/feedback";
import { User } from "../../../database/entities/user";

export default class FeedbackController {
  static async getPostFeedbacks(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;
      const id = request.params.id;

      const { sortOrder = "ASC" } = request.query;

      const data = await Feedback.findAndCount({
        where: {
          post: {
            id,
          },
        },
        relations: ["user"],
        skip,
        take,
        order: {
          id: sortOrder === "DESC" ? "DESC" : "ASC",
        },
      });

      httpResponseSuccess(response, { feedbacks: data[0], count: data[1] });
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async createFeedback(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({ id: request.user });

      if (!user || !user.emailVerifiedAt) {
        return response.status(401).json({
          status: 0,
          message: "Unauthorized!",
        });
      }

      if (user.role != "student") {
        return response.status(403).json({
          status: 0,
          message: "Forbidden!",
        });
      }

      const { postId, rate, content } = request.body;

      const isExist = await Feedback.findOne({
        where: {
          user: {
            id: user.id
          },
          post: {
            id: postId
          }
        },
        relations: ["user", "post"]
      });

      if (isExist) {
        return httpResponseError(response, null, "You already submitted a feedback!", 400);
      }

      const data = await Feedback.create({
        user: {
          id: user.id,
        },
        post: {
          id: postId,
        },
        rate,
        content: content || null,
      });

      await Feedback.save(data);

      httpResponseSuccess(response, data, null, 201);
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  static async deleteFeedback(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const feedback = await Feedback.findOne({
        where: {
          id,
        },
        select: {
          user: {
            id: true,
          },
        },
      });

      if (!feedback) {
        return response.status(404).json({
          status: 0,
          data: null,
          message: "Feedback not found!",
        });
      }

      if (!feedback.user) {
        return response.status(401).json({
          status: 0,
          message: "User not found!",
        });
      }

      if (feedback?.user.id != request.user) {
        return response.status(403).json({
          status: 0,
          data: null,
          message: "Forbidden!",
        });
      }

      await Feedback.delete({ id: feedback.id });

      response.status(200).json({
        status: 1,
        message: "Feedback deleted.",
      });
    } catch (error) {
      response.status(500).json({
        status: 0,
        error,
        message: "Internal server error!",
      });
    }
  }
}
