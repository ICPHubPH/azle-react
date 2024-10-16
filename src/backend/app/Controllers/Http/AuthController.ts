import * as bcryptjs from "bcryptjs";
import { User } from "Database/entities/user";
import { Request, Response } from "express";
import { signToken } from "Helpers/jwt";
import { xFetch } from "Helpers/x-fetch";
import z from "zod";

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8).max(30),
  role: z.enum(["admin", "provider", "student"]),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(30),
});

export default class AuthController {
  static async register(request: Request, response: Response) {
    try {
      if (request.user) {
        return response.json({
          status: 0,
          message: "Authorized!",
        });
      }

      const { data, success, error } = registerSchema.safeParse(request.body);

      if (!success) {
        return response.status(400).json({
          status: 0,
          error,
          message: "Bad request!",
        });
      }

      const isEmailExist = await User.findOneBy({
        email: data?.email,
      });

      if (isEmailExist) {
        return response.json({
          status: 0,
          message: "Email already used",
        });
      }

      const hashedPassword = await bcryptjs.hash(data?.password!, 5);

      const user = new User();
      user.name = data?.name;
      user.email = data?.email;
      user.password = hashedPassword;
      user.setRole(data?.role);

      await User.save(user);

      // for testing
      request.user = user.id;

      // TODO: sign token and send verification email

      response.status(201).json({
        status: 1,
        data: { ...user },
        message: "Please verify your email.",
      });
    } catch (error: any) {
      console.log("ln76", error);
      response.status(500).json({
        status: 0,
        error,
        message: "Internal server error!",
      });
    }
  }

  static async verify(request: Request, response: Response) {
    try {
      const { token } = request.body;

      if (request.user) {
        return response.json({
          status: 0,
          message: "Authorized!",
        });
      }

      if (!token) {
        return response.status(400).json({
          status: 0,
          message: "Bad request!",
        });
      }

      // TODO: external api to verify verification token

      // const decode = (await jwt.verify(token, process.env.JWT_SECRET!)) as {
      //   id: string;
      //   email: string;
      // };

      // const user = await User.findOneBy({ id: decode.id });

      // if (!user) {
      //   return response.status(404).json({
      //     status: 0,
      //     message: "User not found!"
      //   });
      // }

      // if (user.email != decode.email) {
      //   return response.status(400).json({
      //     status: 0,
      //     message: "Bad request!"
      //   });
      // }

      // user.emailVerifiedAt = new Date();
      // await User.save(user);

      return response.status(200).json({
        status: 1,
        message: "You have been verified!",
      });
    } catch {
      response.status(500).json({
        status: 0,
        message: "Server error!",
      });
    }
  }

  static async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      if (request.user) {
        return response.json({
          status: 0,
          message: "Authorized!",
        });
      }

      if (!email || !password) {
        return response.json({
          status: 0,
          message: "Required credentials!",
        });
      }

      const user = await User.findOneBy({ email });

      if (!user) {
        return response.json({
          status: 0,
          message: "Invalid email!",
        });
      }

      const passwordCorrect = await bcryptjs.compare(password, user.password);

      if (!passwordCorrect) {
        return response.json({
          status: 0,
          message: "Invalid password",
        });
      }

      // TODO: external api for generating access token

      const jsonData = await signToken(user.id);

      if (!jsonData) {
        return response.status(500).json({
          status: 0,
          message: "Internal server error. Failed to sign token.",
        });
      }

      return response.status(200).json({
        status: 1,
        data: {
          accessToken: jsonData.data.token,
        },
        message: "Signed in",
      });
    } catch (error) {
      return response.status(500).json({
        status: 0,
        error,
        message: "Server error",
      });
    }
  }
}
