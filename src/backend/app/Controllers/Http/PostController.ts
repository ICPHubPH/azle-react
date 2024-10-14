import { Post } from "Database/entities/post";
import { User } from "Database/entities/user";
import { Request, Response } from "express";

export default class PostController {
    static async getAll(request: Request, response: Response) {
        const page = request.query.page ? Number(request.query.page) : 1;
        const take = request.query.take ? Number(request.query.take) : 10;
        const skip = (page - 1) * take;

        const data = await Post.findAndCount({
            select: {
                id: true,
                title: true,
                thumbnail: true,
                createdAt: true
            },
            skip,
            take
        });

        response.status(200).json({
            status: 1,
            data,
            message: null
        });
    }

    static async findByCategorytype(request: Request, response: Response) {
        const page = request.query.page ? Number(request.query.page) : 1;
        const take = request.query.take ? Number(request.query.take) : 10;
        const skip = (page - 1) * take;

        const type = request.params.type; // post scholarship type

        const data = await Post.findAndCount({
            where: {
                type
            },
            skip,
            take,
            select: {
                id: true,
                title: true,
                thumbnail: true,
                createdAt: true
            }
        });

        response.status(200).json({
            status: 1,
            data,
            message: null
        });
    }

    static async findById(request: Request, response: Response) {
        const id = request.params.id;
        
        const data = await Post.findOne({
            where: {
                id
            },
            select: {
                id: true,
                user: {
                    id: true,
                    name: true
                },
                title: true,
                thumbnail: true,
                content: true,
                type: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!data) {
            response.status(404).json({
                status: 0,
                message: "Post not found!"
            });
        }
        
        response.status(200).json({
            status: 1,
            data,
            message: null
        });
    }

    static async create(request: Request, response: Response) {
        const { userId, title, thumbnail, type, content } = request.body;

        const userExists = await User.findOneBy({ id: userId });

        if (!userExists) {
            return response.status(401).json({
                status: 1,
                message: "Unauthorized!"
            });
        }

        const newPost = await Post.create({
            title,
            content,
            thumbnail,
            type,
            user: userExists
        });

        await Post.save(newPost);

        response.status(201).json({
            status: 1,
            message: "New post created!"
        });
    }

    static async updateById(request: Request, response: Response) {
        // TODO: thumbnail upload and deletion
        const id = request.params.id;
        const { title, type, content } = request.body;
        const exists = await Post.findBy({ id });

        if (!exists) {
            response.status(404).json({
                status: 0,
                message: "Post not found!"
            });
        }

        await Post.update({ id }, { title, type, content });

        response.status(200).json({
            status: 1,
            message: "Post has been updated!"
        });
    }

    static async deleteById(request: Request, response: Response) {
        // TODO: thumbnail deletion
        const id = request.params.id;

        const data = await Post.delete({ id });
        
        if (!data.affected || data.affected == 0) {
            response.status(400).json({
                status: 0,
                message: "Post doesn't exist!"
            });
        }

        response.status(200).json({
            status: 1,
            message: "Post has been deleted!"
        });
    }
}
