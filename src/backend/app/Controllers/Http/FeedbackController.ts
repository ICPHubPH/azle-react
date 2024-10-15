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

    static async createFeedback(request: Request, response: Response) {
        try {
            const { postId, rate, content } = request.body;

            const data = await Feedback.insert({
                user: {
                    id: request.user,
                },
                post: {
                    id: postId
                },
                rate, 
                content: content || null
            });

            return response.status(201).json({
                success: 1,
                data,
                message: null
            });
        } catch (error) {
            response.status(500).json({
                success: 0,
                error,
                message: "Internal server error!"
            })
        }
    }

    static async updatedFeedback(request: Request, response: Response) {
        try { 
            const { content, rate } = request.body;
            const id = request.params.id;

            const isFeedbackExist = await Feedback.findOne({
                where: {
                    id
                },
                select: {
                    user: {
                        id: true
                    }
                }
            });

            if (!isFeedbackExist) {
                return response.status(404).json({
                    success: 0,
                    data: null,
                    message: "Feedback not found!"
                });
            }

            if (isFeedbackExist?.user.id != request.user) {
                return response.status(403).json({
                    success: 0,
                    data: null,
                    message: "Forbidden!"
                });
            }
            
            const data = await Feedback.update({
                id
            }, {
                content,
                rate
            });

            return response.status(200).json({
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

    static async deleteFeedback(request: Request, response: Response) {
        try {
            const id = request.params.id;
            
            const feedback = await Feedback.findOne({
                where: {
                    id
                },
                select: {
                    user: {
                        id: true
                    }
                }
            });

            if (!feedback) {
                return response.status(404).json({
                    success: 0,
                    data: null,
                    message: "Feedback not found!"
                });
            }

            if (feedback?.user.id != request.user) {
                return response.status(403).json({
                    success: 0,
                    data: null,
                    message: "Forbidden!"
                });
            }

            await Feedback.delete({ id: feedback.id });

            response.status(200).json({
                success: 1,
                data: null,
                message: null
            });
        } catch (error) {
            response.status(500).json({
                success: 0,
                error,
                message: "Internal server error!"
            })
        }
    }
}