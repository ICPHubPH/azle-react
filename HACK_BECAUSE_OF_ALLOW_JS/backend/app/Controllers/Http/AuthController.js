import * as bcryptjs from "bcryptjs";
import { User } from "Database/entities/user";
import { sendVerificationLink } from "Helpers/mailer";
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
    static async register(request, response) {
        if (request.user) {
            return response.json({
                success: 0,
                message: "Authorized!"
            });
        }
        const { name, email, password, role } = request.body;
        try {
            const { success, data } = await registerSchema.spa({
                name,
                email,
                password,
                role
            });
            if (!success) {
                throw new Error();
            }
            const isEmailExist = await User.findOneBy({
                email
            });
            if (!isEmailExist) {
                throw new Error();
            }
            const hashedPassword = await bcryptjs.hash(data.password, 5);
            const user = new User();
            user.name = data.name;
            user.email = data.email;
            user.password = hashedPassword;
            user.setRole(data.role);
            await User.save(user);
            const token = await jwt.sign({
                id: user.id,
                email: user.email
            }, process.env.JWT_SECRET, {
                expiresIn: "7d"
            });
            sendVerificationLink({
                name: user.name,
                id: user.id,
                token,
                email: user.email
            });
            response.status(201).json({
                success: 1,
                data: null,
                message: "Please verify your email."
            });
        }
        catch (e) {
            return response.status(400).json({
                success: 0,
                data: null,
                message: "Bad request!"
            });
        }
    }
    static async verify(request, response) {
        const { token } = request.body;
        if (request.user) {
            return response.json({
                success: 0,
                message: "Authorized!"
            });
        }
        try {
            if (!token) {
                throw new Error();
            }
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findOneBy({ id: decode.id });
            if (!user || user.email != decode.email) {
                throw new Error();
            }
            user.emailVerifiedAt = new Date();
            await User.save(user);
            return response.status(200).json({
                success: 1,
                message: "You have been verified!"
            });
        }
        catch {
            response.status(400).json({
                success: 0,
                message: "Bad request!"
            });
        }
    }
    static async login(request, response) {
        const { email, password } = request.body;
        if (request.user) {
            return response.json({
                success: 0,
                message: "Authorized!"
            });
        }
        const { data, success } = await loginSchema.spa({
            email,
            password
        });
        try {
            if (!success) {
                throw new Error();
            }
            const user = await User.findOneBy({ email: data.email });
            if (!user) {
                throw new Error();
            }
            const hashedPassword = await bcryptjs.compare(data.password, user.password);
            if (!hashedPassword) {
                throw new Error();
            }
            const accessToken = await jwt.sign({
                sub: user.id
            }, process.env.JWT_SECRET, {
                expiresIn: "7d"
            });
            return response.status(200).json({
                success: 1,
                data: {
                    accessToken
                },
                message: null
            });
        }
        catch {
            response.status(400).json({
                success: 0,
                message: "Bad Request!"
            });
        }
    }
}
