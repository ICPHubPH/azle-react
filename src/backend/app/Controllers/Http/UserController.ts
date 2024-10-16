import bcryptjs from "bcryptjs";
import { User } from "Database/entities/user";
import { Request, Response } from "express";
import { EmailMessage, sendEmail } from "Helpers/mailer";

export default class UserController {
  static async getAll(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      console.log("ln12", request.user);

      const data = await User.findAndCount({
        select: {
          id: true,
          name: true,
          avatarUrl: true,
          bio: true,
          email: true,
          role: true,
          validIdUrl: true,
          bannerUrl: true,
        },
        skip,
        take,
      });

      return response.status(200).json({
        status: 1,
        data: data[0],
        count: data[1],
        message: null,
      });
    } catch (error) {
      response.status(500).json({
        success: 0,
        error,
        message: "Internal server error!",
      });
    }
  }

  static async findById(request: Request, response: Response) {
    const id = request.params.id;

    const data = await User.findOneBy({
      id,
    });

    if (!data) {
      response.status(404).json({
        status: 0,
        message: "User not found!",
      });
    }

    response.status(200).json({
      status: 1,
      data,
      message: null,
    });
  }

  // TODO: avatar, banner, valid ID
  static async updateById(request: Request, response: Response) {
    const id = request.params.id;
    const { name, bio } = request.body;
    const isUserExists = await User.findOneBy({ id });

    if (!isUserExists) {
      return response.status(404).json({
        success: 0,
        data: null,
        message: "User not found!",
      });
    }

    if (request.user != id && isUserExists.role != "admin") {
      return response.status(403).json({
        success: 0,
        data: null,
        message: "Forbidden",
      });
    }

    await User.update({ id }, { name, bio });

    response.status(200).json({
      status: 1,
      message: "User has been updated!",
    });
  }

  // delete account
  static async deleteById(request: Request, response: Response) {
    const id = request.params.id;
    const isUserExists = await User.findOneBy({ id });

    if (!isUserExists) {
      return response.status(404).json({
        success: 0,
        data: null,
        message: "User not found!",
      });
    }

    if (request.user != id && isUserExists.role != "admin") {
      return response.status(403).json({
        success: 0,
        data: null,
        message: "Forbidden!",
      });
    }

    const data = await User.delete({ id });

    if (!data.affected || data.affected == 0) {
      response.status(400).json({
        status: 0,
        message: "User doesn't exist!",
      });
    }

    response.status(200).json({
      status: 1,
      message: "User has been deleted!",
    });
  }

  // for test
  static async create(request: Request, response: Response) {
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
          message: isInvalidRole,
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
          role: data.role,
        },
        message: "User created.",
      });
    } catch (e) {
      response.status(400).json({
        status: 0,
        error: e,
        message: "Bad request!",
      });
    }
  }

  // for test
  static async deleteMany(request: Request, response: Response) {
    await User.clear();
    response.status(200).json({
      status: 1,
      message: "Users deleted.",
    });
  }

  // Just for testing
  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async uploadValidIdUrl(request: Request, response: Response) {
    try {
      const { validIdUrl, id } = request.body;

      if (!validIdUrl) {
        return response.status(400).json({
          status: 0,
          message: "Invalid ID URL!",
        });
      }

      const user = await User.findOneBy({
        id,
      });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!",
        });
      }

      if (user.role !== "provider") {
        return response.status(403).json({
          status: 0,
          message: "Only providers can upload ID URLs.",
        });
      }

      user.validIdUrl = validIdUrl;
      await User.save(user);
      response.status(200).json({
        status: 1,
        message: "Valid ID URL updated.",
        user,
      });
    } catch (error: any) {
      console.log("LN176", error);
      response.status(500).json({
        status: 0,
        message: "Server error",
      });
    }
  }

  // Just for testing
  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async uploadAvatarUrl(request: Request, response: Response) {
    try {
      const { avatarUrl, id } = request.body;

      if (!avatarUrl) {
        return response.status(400).json({
          status: 0,
          message: "Invalid avatar URL!",
        });
      }

      const user = await User.findOneBy({
        id,
      });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!",
        });
      }

      user.avatarUrl = avatarUrl;
      await User.save(user);
      response.status(200).json({
        status: 1,
        message: "Avatar URL updated.",
        user,
      });
    } catch (error: any) {
      console.log("LN226", error);
      response.status(500).json({
        status: 0,
        message: "Server error",
      });
    }
  }

  // Just for testing
  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async uploadBannerUrl(request: Request, response: Response) {
    try {
      console.log("req.user", request.user);

      const { bannerUrl, id } = request.body;

      if (!bannerUrl) {
        return response.status(400).json({
          status: 0,
          message: "Invalid banner URL!",
        });
      }

      const user = await User.findOneBy({
        id,
      });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!",
        });
      }

      user.bannerUrl = bannerUrl;
      await User.save(user);
      response.status(200).json({
        status: 1,
        message: "Banner URL updated.",
        user,
      });
    } catch (error: any) {
      console.log("LN280", error);
      response.status(500).json({
        status: 0,
        message: "Server error",
      });
    }
  }

  // Just for testing
  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async changePassword(request: Request, response: Response) {
    try {
      const { oldPassword, newPassword, confirmPassword, id } = request.body;

      if (!oldPassword || !newPassword || !confirmPassword) {
        return response.status(400).json({
          status: 0,
          message: "Missing required fields!",
        });
      }

      const user = await User.findOneBy({ id });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!",
        });
      }

      const isMatch = await bcryptjs.compare(oldPassword, user.password);

      if (!isMatch) {
        return response.status(400).json({
          status: 0,
          message: "Incorrect old password!",
        });
      }

      if (newPassword !== confirmPassword) {
        return response.status(400).json({
          status: 0,
          message: "Passwords do not match!",
        });
      }

      user.password = await bcryptjs.hash(newPassword, 5);
      await User.save(user);
      response.status(200).json({
        status: 1,
        message: "Password updated.",
        user,
      });
    } catch (error: any) {
      console.log("LN350", error);
      return response.status(500).json({
        status: 0,
        message: "Server error",
      });
    }
  }

  // Just for testing
  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async updateSelf(request: Request, response: Response) {
    try {
      const { name, bio, id } = request.body;

      const user = await User.findOneBy({ id });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!",
        });
      }

      user.name = name ?? user.name;

      if (bio === "") {
        user.bio = null;
      } else if (bio) {
        user.bio = bio;
      }

      await User.save(user);
      response.status(200).json({
        status: 1,
        message: "User updated.",
        user,
      });
    } catch (error: any) {
      console.log("LN392", error);
      return response.status(500).json({
        status: 0,
        message: "Server error",
      });
    }
  }

  static async test(request: Request, response: Response) {
    try {
      const emailMessage: EmailMessage = {
        body: {
          name: "Kurtd Daniel Bigtas",
          intro: "Test ulit gamit dfx deploy",
          action: {
            instructions: "To get started with Mailgen, please click here:",
            button: {
              color: "#22BC66",
              text: "click kung baliw ka",
              link: "https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010",
            },
          },
          outro:
            "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
      };

      await sendEmail(emailMessage, "kurtddbigtas@gmail.com", "TEST EMAIL FROM IC (1)")

      return response.status(200).json({
        status: 1,
        message: "Test successful.",
      });
    } catch (error) {
      console.log("LN415", error);
      response.status(500).json({
        status: 0,
        message: "Server error",
      });
    }
  }
}
