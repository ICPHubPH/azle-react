import { Configuration } from 'Database/entities/configuration';
import { Request, Response } from 'express';

export default class ApisController {
    static async greet(request: Request, response: Response) {
        response.json({ greeting: `Hello, ${request.query.name}` });
    }

    static async configurations(request: Request, response: Response){
        const configuration = await Configuration.find();

        response.json({
            status: 1,
            data: configuration
        });
    }

    static async insert_configuration(request: Request, response: Response){
        const { key, value } = request.body;
        await Configuration.insert({key, value});

        const checkIfExist = await Configuration.findBy({ key });

        if(!checkIfExist){
            response.json({
                status: 0,
                message: "Configuration already exists!"
            });
        }

        response.json({
            status: 1,
            message: "Configuration has been inserted!",
        });
    }

    static async update_configuration(request: Request, response: Response){
        const { key, value } = request.body;
        const getConfiguration = await Configuration.findBy({ key });

        if(!getConfiguration){
            response.json({
                status: 0,
                message: "Configuration not found!"
            });
        }
        
        await Configuration.update({ key }, { value });
        response.json({
            status: 1,
            message: "Configuration has been updated!",
        });
    }

    static async delete_configuration(request: Request, response: Response){
        const { key } = request.body;
        const getConfiguration = await Configuration.findBy({ key });

        if(!getConfiguration){
            response.json({
                status: 0,
                message: "Configuration not found!"
            });
        }

        await Configuration.delete({ key });

        response.json({
            status: 1,
            message: "Configuration has been deleted!",
        });
    }

    // User Controllers
    // static user = {
    //      async getAll(request: Request, response: Response) {
    //         const page = request.query.page ? Number(request.query.page) : 1;
    //         const take = request.query.take ? Number(request.query.take) : 10;
    //         const skip = (page - 1) * take;
    
    //         const data = await User.findAndCount({
    //             select: {
    //                 id: true,
    //                 name: true,
    //                 username: true,
    //                 image: true,
    //                 role: true
    //             },
    //             skip,
    //             take
    //         });
    
    //         response.status(200).json({
    //             status: 1,
    //             data,
    //             message: null
    //         });
    //     },
    
    //      async findById(request: Request, response: Response) {
    //         const id = request.params.id;
    
    //         const data = await User.findOneBy({
    //             id
    //         });
    
    //         if (!data) {
    //             response.status(404).json({
    //                 status: 0,
    //                 message: "User not found!"
    //             });
    //         }
    
    //         response.status(200).json({
    //             status: 1,
    //             data,
    //             message: null
    //         });
    //     },
    
    //      async updateById(request: Request, response: Response) {
    //         const id = request.params.id;
    //         const { name, bio, username } = request.body;
    //         const exists = await User.findBy({ id });
    
    //         if (!exists) {
    //             response.status(404).json({
    //                 status: 0,
    //                 message: "User not found!"
    //             });
    //         }
    
    //         const uniqueUsername = await User.findOneBy({ username });
    
    //         if (uniqueUsername) {
    //             response.status(400).json({
    //                 status: 0,
    //                 message: "Username already in use!"
    //             });
    //         }
    
    //         await User.update({ id }, { name, bio, username });
    
    //         response.status(200).json({
    //             status: 1,
    //             message: "User has been updated!"
    //         });
    //     },
    
    //      async deleteById(request: Request, response: Response) {
    //         const id = request.params.id;
    
    //         const data = await User.delete({ id });
            
    //         if (!data.affected || data.affected == 0) {
    //             response.status(400).json({
    //                 status: 0,
    //                 message: "User doesn't exist!"
    //             });
    //         }
    
    //         response.status(200).json({
    //             status: 1,
    //             message: "User has been deleted!"
    //         });
    //     }
    // }

    // static post = {
    //     async getAll(request: Request, response: Response) {
    //         const page = request.query.page ? Number(request.query.page) : 1;
    //         const take = request.query.take ? Number(request.query.take) : 10;
    //         const skip = (page - 1) * take;
    
    //         const data = await Post.findAndCount({
    //             select: {
    //                 id: true,
    //                 title: true,
    //                 thumbnail: true,
    //                 createdAt: true
    //             },
    //             skip,
    //             take
    //         });
    
    //         response.status(200).json({
    //             status: 1,
    //             data,
    //             message: null
    //         });
    //     },
    
    //     async findByCategory(request: Request, response: Response) {
    //         const page = request.query.page ? Number(request.query.page) : 1;
    //         const take = request.query.take ? Number(request.query.take) : 10;
    //         const skip = (page - 1) * take;
    
    //         const type = request.params.type; // post scholarship type
    
    //         const data = await Post.findAndCount({
    //             where: {
    //                 type
    //             },
    //             skip,
    //             take,
    //             select: {
    //                 id: true,
    //                 title: true,
    //                 thumbnail: true,
    //                 createdAt: true
    //             }
    //         });
    
    //         response.status(200).json({
    //             status: 1,
    //             data,
    //             message: null
    //         });
    //     },
    
    //     async findById(request: Request, response: Response) {
    //         const id = request.params.id;
            
    //         const data = await Post.findOne({
    //             where: {
    //                 id
    //             },
    //             select: {
    //                 id: true,
    //                 user: {
    //                     id: true,
    //                     name: true
    //                 },
    //                 title: true,
    //                 thumbnail: true,
    //                 content: true,
    //                 type: true,
    //                 createdAt: true,
    //                 updatedAt: true
    //             }
    //         });
    
    //         if (!data) {
    //             response.status(404).json({
    //                 status: 0,
    //                 message: "Post not found!"
    //             });
    //         }
            
    //         response.status(200).json({
    //             status: 1,
    //             data,
    //             message: null
    //         });
    //     },
    
    //      async create(request: Request, response: Response) {
    //         const { userId, title, thumbnail, type, content } = request.body;
    
    //         const userExists = await User.findOneBy({ id: userId });
    
    //         if (!userExists) {
    //             return response.status(401).json({
    //                 status: 1,
    //                 message: "Unauthorized!"
    //             });
    //         }
    
    //         const newPost = await Post.create({
    //             title,
    //             content,
    //             thumbnail,
    //             type,
    //             user: userExists            
    //         });
    
    //         await Post.save(newPost);
    
    //         response.status(201).json({
    //             status: 1,
    //             message: "New post created!"
    //         });
    //     },
    
    //     async updateById(request: Request, response: Response) {
    //         // TODO: thumbnail upload and deletion
    //         const id = request.params.id;
    //         const { title, type, content } = request.body;
    //         const exists = await Post.findBy({ id });
    
    //         if (!exists) {
    //             response.status(404).json({
    //                 status: 0,
    //                 message: "Post not found!"
    //             });
    //         }
    
    //         await Post.update({ id }, { title, type, content });
    
    //         response.status(200).json({
    //             status: 1,
    //             message: "Post has been updated!"
    //         });
    //     },
    
    //     async deleteById(request: Request, response: Response) {
    //         // TODO: thumbnail deletion
    //         const id = request.params.id;
    
    //         const data = await Post.delete({ id });
            
    //         if (!data.affected || data.affected == 0) {
    //             response.status(400).json({
    //                 status: 0,
    //                 message: "Post doesn't exist!"
    //             });
    //         }
    
    //         response.status(200).json({
    //             status: 1,
    //             message: "Post has been deleted!"
    //         });
    //     }
    // }

    // static user = {
    //     async getAll(req: Request, res: Response) {
    //         res.json({
    //             status: 1
    //         })
    //     }
    // }
}
