import * as bcryptjs from "bcryptjs";
import { User } from "Database/entities/user";
import { Request, Response } from "express";
import { loginSchema, registerSchema } from "Helpers/zod-schemas";

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
          error: error.errors,
          message: "Bad request!"
        });
      }

      const isEmailExist = await User.findOneBy({
        email: data?.email
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
          message: "Bad request!"
        });
      }

      // TODO: external api to verify verification token

      // const decode = (await jwt.verify(token, process.env.JWT_SECRET!)) as {
      //   id: string;
      //   email: string;
      // };

      const user = await User.findOneBy({ email: token });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!"
        });
      }

      // if (user.email != decode.email) {
      //   return response.status(400).json({
      //     status: 0,
      //     message: "Bad request!"
      //   });
      // }

      user.emailVerifiedAt = new Date();
      await User.save(user);

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
      if (request.user) {
        return response.json({
          status: 0,
          message: "Authorized!",
        });
      }

      const { data, success, error } = loginSchema.safeParse(request.body);

      if (!success) {
        return response.status(400).json({
          status: 0,
          error: error.errors,
          message: "Bad request!"
        });
      }

      const user = await User.findOneBy({ email: data.email });

      if (!user) {
        return response.status(400).json({
          status: 0,
          message: "Invalid email!",
        });
      }

      if (!user.emailVerifiedAt) {
        // NOTE: sending verification email can be done here
        // ...
        return response.status(403).json({
          status: 0,
          message: "Please verify your email!"
        });
      }

      const passwordCorrect = await bcryptjs.compare(data.password, user.password);

      if (!passwordCorrect) {
        return response.json({
          status: 0,
          message: "Invalid password",
        });
      }


      // TODO: external api for generating access token

      return response.status(200).json({
        status: 1,
        data: {
          // accessToken
        },
        message: "Signed in",
      });
    } catch (error) {
      return response.status(500).json({
        status: 0,
        error,
        message: "Server error"
      });
    }
  }
}
