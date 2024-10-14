import { User } from "Database/entities/user";
export default class UserController {
    static async getAll(request, response) {
        const page = request.query.page ? Number(request.query.page) : 1;
        const take = request.query.take ? Number(request.query.take) : 10;
        const skip = (page - 1) * take;
        const data = await User.findAndCount({
            select: {
                id: true,
                name: true,
                avatarUrl: true,
                bio: true,
                email: true,
                role: true
            },
            skip,
            take
        });
        response.status(200).json({
            status: 1,
            data: data[0],
            count: data[1],
            message: null
        });
    }
    static async findById(request, response) {
        const id = request.params.id;
        const data = await User.findOneBy({
            id
        });
        if (!data) {
            response.status(404).json({
                status: 0,
                message: "User not found!"
            });
        }
        response.status(200).json({
            status: 1,
            data,
            message: null
        });
    }
    // TODO: avatar, banner, valid ID
    static async updateById(request, response) {
        const id = request.params.id;
        const { name, bio } = request.body;
        const isUserExists = await User.findOneBy({ id });
        if (!isUserExists) {
            return response.status(404).json({
                success: 0,
                data: null,
                message: "User not found!"
            });
        }
        if (request.user != id && isUserExists.role != "admin") {
            return response.status(403).json({
                success: 0,
                data: null,
                message: "Forbidden"
            });
        }
        await User.update({ id }, { name, bio });
        response.status(200).json({
            status: 1,
            message: "User has been updated!"
        });
    }
    // delete account
    static async deleteById(request, response) {
        const id = request.params.id;
        const isUserExists = await User.findOneBy({ id });
        if (!isUserExists) {
            return response.status(404).json({
                success: 0,
                data: null,
                message: "User not found!"
            });
        }
        if (request.user != id && isUserExists.role != "admin") {
            return response.status(403).json({
                success: 0,
                data: null,
                message: "Forbidden!"
            });
        }
        const data = await User.delete({ id });
        if (!data.affected || data.affected == 0) {
            response.status(400).json({
                status: 0,
                message: "User doesn't exist!"
            });
        }
        response.status(200).json({
            status: 1,
            message: "User has been deleted!"
        });
    }
    // for test
    static async create(request, response) {
        const { avatarUrl, email, password, name, bio, role } = request.body;
        try {
            const user = new User();
            user.name = name;
            user.email = email;
            user.avatarUrl = avatarUrl;
            user.password = password;
            user.emailVerifiedAt = new Date();
            user.bio = bio;
            const isInvalidRole = user.setRole(role);
            if (isInvalidRole) {
                return response.status(400).json({
                    status: 0,
                    message: isInvalidRole
                });
            }
            const data = await User.save(user);
            return response.status(201).json({
                status: 1,
                data: {
                    id: data.id,
                    avatarUrl: data.avatarUrl,
                    name: data.name,
                    email: data.email,
                    bio: data.bio,
                    role: data.role
                },
                message: "User created."
            });
        }
        catch (e) {
            response.status(400).json({
                status: 0,
                error: e,
                message: "Bad request!"
            });
        }
    }
    // for test
    static async deleteMany(request, response) {
        await User.clear();
        response.status(200).json({
            status: 1,
            message: "Users deleted."
        });
    }
}
