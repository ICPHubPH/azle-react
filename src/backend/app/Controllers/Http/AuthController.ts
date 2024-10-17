import * as bcryptjs from "bcryptjs";
import { User } from "Database/entities/user";
import { VerificationCode } from "Database/entities/verification-code";
import { Request, Response } from "express";
import { generateOTP, getCanisterLink } from "Helpers/helpers";
import { signToken, verifyToken } from "Helpers/jwt";
import { EmailMessage, sendEmail } from "Helpers/mailer";
import { loginSchema, registerSchema } from "Helpers/zod-schemas";
import { IsNull } from "typeorm";

export default class AuthController {
  static async register(request: Request, response: Response) {
    try {
      const { data, success, error } = registerSchema.safeParse(request.body);

      if (!success) {
        return response.status(400).json({
          status: 0,
          error: error.errors,
          message: "Bad request!",
        });
      }

      const isEmailExist = await User.findOneBy({
        email: data?.email,
      });

      if (isEmailExist) {
        return response.json({
          status: 0,
          message: "This email is already associated with another account",
        });
      }

      const hashedPassword = await bcryptjs.hash(data?.password!, 5);

      const user = new User();
      user.name = data?.name;
      user.email = data?.email;
      user.password = hashedPassword;
      user.setRole(data?.role);

      await User.save(user);

      const otp = await generateOTP(6);

      await VerificationCode.insert({
        code: otp,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
        user: user,
      });

      const emailMessage: EmailMessage = {
        body: {
          name: user.name,
          intro: [
            "Welcome to ConnectED",
            `We\'re very excited to have you on board. Here is your One-Time Password (OTP) for account verification: `,
            `<h1 style="color: blue">${otp}<h1/>`,
          ],
          outro:
            "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
      };

      await sendEmail(
        emailMessage,
        user.email,
        "[ConnectED] Your One-Time Password"
      );

      response.status(201).json({
        status: 1,
        data: { user },
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

  // NOTE: In case we use otp instead of magic link, feel free to modify.
  static async verify(request: Request, response: Response) {
    try {
      const token = request.query.t;

      if (!token) {
        return response.status(400).json({
          status: 0,
          message: "Bad request!",
        });
      }

      const t = await verifyToken(token as string);

      if (!t?.decoded) {
        return response.status(400).json({
          status: 0,
          message: "Invalid token!",
        });
      }

      const user = await User.findOneBy({
        id: t.decoded.id,
        archivedAt: IsNull(),
      });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "Invalid payload!",
        });
      }

      if (user.emailVerifiedAt) {
        return response.status(400).json({
          status: 0,
          message: "Your account was already verified!",
        });
      }

      // additional security - compare emails

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
      const { data, success, error } = loginSchema.safeParse(request.body);

      if (!success) {
        return response.status(400).json({
          status: 0,
          error: error.errors,
          message: "Bad request!",
        });
      }

      const user = await User.findOneBy({
        email: data.email,
        archivedAt: IsNull(),
      });

      if (!user) {
        return response.status(400).json({
          status: 0,
          message: "Invalid email!",
        });
      }

      if (!user.emailVerifiedAt) {
        const {
          data: { token },
        } = await signToken(user.id, "5m");

        const emailMessage: EmailMessage = {
          body: {
            name: user.name,
            intro: "Welcome to ConnectED",
            action: {
              instructions: "To verify your account, please click here:",
              button: {
                color: "#22BC66",
                text: "Verify account",
                link: `${getCanisterLink()}/icp/auth/verify?t=${token}`, // must change to frontend url
              },
            },
            outro:
              "Need help, or have questions? Just reply to this email, we'd love to help.",
          },
        };

        await sendEmail(
          emailMessage,
          user.email,
          "ConnectED Account Verification"
        );
        return response.status(403).json({
          status: 0,
          message: "Please verify your email!",
        });
      }

      const passwordCorrect = await bcryptjs.compare(
        data.password,
        user.password
      );

      if (!passwordCorrect) {
        return response.json({
          status: 0,
          message: "Invalid password",
        });
      }

      // TODO: external api for generating access token

      const jsonData = await signToken(user.id, "1m");

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
