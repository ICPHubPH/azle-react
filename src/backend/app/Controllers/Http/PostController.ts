import { Category } from "Database/entities/category";
import { Post } from "Database/entities/post";
import { User } from "Database/entities/user";
import { Request, Response } from "express";

export default class PostController {
    static async posts(request: Request, response: Response) {
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

    static async findPostByCategory(request: Request, response: Response) {
        const page = request.query.page ? Number(request.query.page) : 1;
        const take = request.query.take ? Number(request.query.take) : 10;
        const skip = (page - 1) * take;

        const name = request.params.name;
        const exists = await Category.findOneBy({
            name
        });

        if (!exists) {
            return response.status(404).json({
                status: 0,
                message: "Category not found!"
            });
        }

        const data = await Category.findAndCount({
            where: {
                id: exists.id
            },
            skip,
            take,
            select: {
                name: true,
                posts: {
                    id: true,
                    title: true,
                    thumbnail: true,
                    createdAt: true
                }
            }
        });

        response.status(200).json({
            status: 1,
            data,
            message: null
        });
    }

    static async findPostById(request: Request, response: Response) {
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

    static async createPost(request: Request, response: Response) {
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

    static async updatedPostById(request: Request, response: Response) {
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

    static async deletePostById(request: Request, response: Response) {
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