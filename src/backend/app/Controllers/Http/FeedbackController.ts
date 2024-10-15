import { Feedback } from "Database/entities/feedback";
import { Request, Response } from "express";

export default class FeedbackController {
    static async getPostFeedbacks(request: Request, response: Response) {
        try {
            const skip = request.skip;
            const take = request.limit;
            const postId = request.params.postId;

            const data = await Feedback.findAndCount({
                where: {
                    post: {
                        id: postId
                    }
                },
                select: {
                    id: true,
                    rate: true,
                    content: true,
                    createdAt: true,
                    updatedAt: true,
                    post: {
                        id: true
                    }
                },
                skip,
                take
            });

            response.status(200).json({
                success: 1,
                data,
                message: null
            });
        } catch (error) {
            response.status(500).json({
                success: 0,
                error,
                message: "Internal server error!"
            });
        }
    }
}