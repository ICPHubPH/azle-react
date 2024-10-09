import { Request, Response } from "express";
export default class UserController {
    // static async getAll(request: Request, response: Response) {
    //     const page = request.query.page ? Number(request.query.page) : 1;
    //     const take = request.query.take ? Number(request.query.take) : 10;
    //     const skip = (page - 1) * take;

    //     const data = await User.findAndCount({
    //         select: {
    //             id: true,
    //             name: true,
    //             username: true,
    //             image: true,
    //             role: true
    //         }
    //         skip,
    //         take
    //     });

    //     response.status(200).json({
    //         status: 1,
    //         data,
    //         message: null
    //     });
    // }

    // static async findById(request: Request, response: Response) {
    //     const id = request.params.id;

    //     const data = await User.findOneBy({
    //         id
    //     });

    //     if (!data) {
    //         response.status(404).json({
    //             status: 0,
    //             message: "User not found!"
    //         });
    //     }

    //     response.status(200).json({
    //         status: 1,
    //         data,
    //         message: null
    //     });
    // }

    // static async updateById(request: Request, response: Response) {
    //     const id = request.params.id;
    //     const { name, bio, username } = request.body;
    //     const exists = await User.findBy({ id });

    //     if (!exists) {
    //         response.status(404).json({
    //             status: 0,
    //             message: "User not found!"
    //         });
    //     }

    //     const uniqueUsername = await User.findOneBy({ username });

    //     if (uniqueUsername) {
    //         response.status(400).json({
    //             status: 0,
    //             message: "Username already in use!"
    //         });
    //     }

    //     await User.update({ id } { name, bio, username });

    //     response.status(200).json({
    //         status: 1,
    //         message: "User has been updated!"
    //     });
    // }

    // static async deleteById(request: Request, response: Response) {
    //     const id = request.params.id;

    //     const data = await User.delete({ id });
        
    //     if (!data.affected || data.affected == 0) {
    //         response.status(400).json({
    //             status: 0,
    //             message: "User doesn't exist!"
    //         });
    //     }

    //     response.status(200).json({
    //         status: 1,
    //         message: "User has been deleted!"
    //     });
    // }

    static async test(request: Request, response: Response) {
        response.json({
            status: 1
        });
    }
}
