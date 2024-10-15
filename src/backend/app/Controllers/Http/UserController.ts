import { User } from "Database/entities/user";
import { Request, Response } from "express";
export default class UserController {
  static async getAll(request: Request, response: Response) {
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
        role: true,
        validIdUrl: true,
        bannerUrl: true
      },
      skip,
      take,
    });

    response.status(200).json({
      status: 1,
      data: data[0],
      count: data[1],
      message: null,
    });
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
}
