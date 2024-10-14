import * as bcryptjs from "bcryptjs";
import { User } from "Database/entities/user";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import z from "zod";

const registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(30),
    role: z.enum(['admin', 'provider', 'student'])
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(30)
});

export default class AuthController {
    static async register(request: Request, response: Response) {
        if (request.user) {
            return response.json({
                success: 0,
                message: "Authorized!"
            });
        }

        const { name, email, password, role } = request.body;

        const isEmailExist = await User.findOneBy({
            email
        });   

        if (isEmailExist) {
            return response.json({
                success: 0,
                data: null,
                message: null
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 5);

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;
        user.setRole(role);

        await User.save(user);

        // const token = await jwt.sign({
        //     id: user.id,
        //     email: user.email
        // }, process.env.JWT_SECRET!, {
        //     expiresIn: "7d"
        // });

        // sendVerificationLink({
        //     name: user.name,
        //     id: user.id,
        //     token,
        //     email: user.email
        // });

        response.status(201).json({
            success: 1,
            data: {...user},
            message: "Please verify your email."
        });
    }

    static async verify(request: Request, response: Response) {
        const { token } = request.body;

        if (request.user) {
            return response.json({
                success: 0,
                message: "Authorized!"
            });
        }

        try {
            if (!token) {
                throw new Error()
            }

            const decode = await jwt.verify(token, process.env.JWT_SECRET!) as {
                id: string;
                email: string;
            };

            const user = await User.findOneBy({ id: decode.id });

            if(!user || user.email != decode.email) {
                throw new Error()
            }

            user.emailVerifiedAt = new Date();
            await User.save(user);
            
            return response.status(200).json({
                success: 1,
                message: "You have been verified!"
            });
        } catch {
            response.status(400).json({
                success: 0,
                message: "Bad request!"
            })
        }
    }

    static async login(request: Request, response: Response) {
        const { email, password } = request.body;

        if (request.user) {
            return response.json({
                success: 0,
                message: "Authorized!"
            });
        }

        if (!email || !password) {
            return response.json({
                success: 0,
                message: "Required credentials!"
            });
        }

        const user = await User.findOneBy({ email });

        if (!user) {
            return response.json({
                success: 0,
                message: "Invalid email!"
            })
        }

        const hashedPassword = await bcryptjs.compare(password, user.password);

        if (!hashedPassword) {
            return response.json({
                success: 0,
                message: "Invalid password"
            })
        }

        // const accessToken = jwt.sign({
        //     id: user.id
        // }, process.env.JWT_SECRET!, {
        //     expiresIn: "7d"
        // });

        return response.status(200).json({
            success: 1,
            data: {
                // accessToken
            },
            message: null
        });
    }
}