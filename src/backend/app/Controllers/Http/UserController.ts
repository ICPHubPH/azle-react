import { Request, Response } from "express";
import { EmailMessage, sendEmail } from "Helpers/mailer";
import { httpResponseError, httpResponseSuccess } from "Helpers/response";
import { IsNull, Not } from "typeorm";
import { User } from "../../../database/entities/user";

// GET all users
export default class UserController {
  static async getSelf(request: Request, response: Response) {
    const user = await User.findOneBy({ id: request.user });

    if (!user) {
      return httpResponseError(response, null, "Unauthorized!", 401);
    }

    httpResponseSuccess(response, { user }, null, 200);
  }

  static async getAll(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const data = await User.findAndCount({
        where: {
          archivedAt: IsNull(),
          emailVerifiedAt: Not(IsNull()),
        },
        skip,
        take,
      });

      httpResponseSuccess(
        response,
        { users: data[0], count: data[1] },
        null,
        200
      );
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  // GET one user
  static async findById(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const user = await User.findOneBy({
        id,
        archivedAt: IsNull(),
        emailVerifiedAt: Not(IsNull()),
      });

      if (!user) {
        return httpResponseError(response, null, "User not found!", 404);
      }
      httpResponseSuccess(response, { user }, null, 200);
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  static async getProviders(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const {
        sortOrder = "ASC",
        type,
        verified = "true",
        archived = "false",
      } = request.query;

      const whereCondition: any = {
        role: "provider",
        providerVerifiedAt: verified === "true" ? Not(IsNull()) : IsNull(),
        archivedAt: archived === "true" ? Not(IsNull()) : IsNull(),
      };

      if (type) {
        whereCondition.type = type;
      }

      const data = await User.findAndCount({
        where: whereCondition,
        skip,
        take,
        order: {
          id: sortOrder === "DESC" ? "DESC" : "ASC",
        },
      });

      httpResponseSuccess(
        response,
        { providers: data[0], count: data[1] },
        null,
        200
      );
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  static async getProviderById(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const provider = await User.findOne({
        where: {
          id: id,
          role: "provider",
          providerVerifiedAt: Not(IsNull()),
          validIdUrl: Not(IsNull()),
        },
      });

      if (!provider) {
        return httpResponseError(response, null, "Provider not found!", 404);
      }

      return httpResponseSuccess(response, provider, null, 200);
    } catch (error) {
      console.log("Error fetching provider: ", error);
      return httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  static async getNonVerifiedProviders(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const data = await User.findAndCount({
        where: {
          role: "provider",
          archivedAt: IsNull(),
          providerVerifiedAt: IsNull(),
          emailVerifiedAt: Not(IsNull()),
        },
        skip,
        take,
      });

      httpResponseSuccess(
        response,
        { providers: data[0], count: data[1] },
        null,
        200
      );
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  static async getStudents(request: Request, response: Response) {
    try {
      const skip = request.skip;
      const take = request.limit;

      const data = await User.findAndCount({
        where: {
          archivedAt: IsNull(),
          emailVerifiedAt: Not(IsNull()),
          role: "student",
        },
        skip,
        take,
      });

      httpResponseSuccess(
        response,
        { students: data[0], count: data[1] },
        null,
        200
      );
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  // delete account
  static async deleteById(request: Request, response: Response) {
    try {
      const user = await User.findOne({
        where: {
          id: request.user,
        },
        select: {
          role: true,
        },
      });

      if (!user) {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      const id = request.params.id;
      const isUserExists = await User.findOneBy({ id });

      if (!isUserExists) {
        return httpResponseError(response, null, "User not found!", 404);
      }

      if (isUserExists.id != request.user && user.role != "admin") {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      const data = await User.delete({ id });

      if (!data.affected || data.affected == 0) {
        return httpResponseError(response, null, "User not found!", 404);
      }

      httpResponseSuccess(response, null, "User has been deleted");
    } catch (error) {
      return httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  // for test
  static async deleteMany(request: Request, response: Response) {
    try {
      await User.clear();
      httpResponseSuccess(response, null, "All users have been deleted");
    } catch (error) {
      return httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async uploadValidIdUrl(request: Request, response: Response) {
    try {
      const { validIdUrl } = request.body;

      if (!validIdUrl) {
        return httpResponseError(response, null, "ID URL is required", 400);
      }

      const user = await User.findOneBy({
        id: request.user,
      });

      if (!user) {
        return httpResponseError(response, null, "Bad request", 400);
      }

      if (user.role != "provider") {
        return httpResponseError(
          response,
          null,
          "Only providers can upload ID URLs.",
          403
        );
      }

      user.validIdUrl = validIdUrl;
      await User.save(user);
      httpResponseSuccess(
        response,
        { user },
        "Valid ID URL saved successfully"
      );
    } catch (error: any) {
      return httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async uploadAvatarUrl(request: Request, response: Response) {
    try {
      const { avatarUrl } = request.body;

      if (!avatarUrl) {
        return httpResponseError(response, null, "Invalid avatar URL!", 400);
      }

      const user = await User.findOneBy({
        id: request.user,
      });

      if (!user) {
        return httpResponseError(response, null, "Bad request", 400);
      }

      user.avatarUrl = avatarUrl;
      await User.save(user);

      httpResponseSuccess(response, { user }, "Avatar URL saved successfully");
    } catch (error: any) {
      console.log("LN226", error);
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async uploadBannerUrl(request: Request, response: Response) {
    try {
      const { bannerUrl } = request.body;

      if (!bannerUrl) {
        return httpResponseError(response, null, "Banner URL is required", 400);
      }

      const user = await User.findOneBy({
        id: request.user,
      });

      if (!user) {
        return httpResponseError(response, null, "Bad request", 400);
      }

      user.bannerUrl = bannerUrl;
      await User.save(user);

      httpResponseSuccess(response, { user }, "Banner URL saved successfully");
    } catch (error: any) {
      console.log("LN280", error);
      httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  // Need to replace ID with the actual user ID coming from the request (req.user)
  static async updateSelf(request: Request, response: Response) {
    try {
      const { name, bio } = request.body;

      const user = await User.findOneBy({ id: request.user });

      if (!user) {
        return httpResponseError(response, null, "Bad Request", 400);
      }

      user.name = name ?? user.name;

      if (bio === "") {
        user.bio = null;
      } else if (bio) {
        user.bio = bio;
      }

      await User.save(user);
      httpResponseSuccess(response, { user }, "Profile updated successfully");
    } catch (error: any) {
      console.log("LN392", error);
      return httpResponseError(response, null, "Internal Server Error", 500);
    }
  }

  static async test(request: Request, response: Response) {
    httpResponseSuccess(response, null, "testing");
  }
}
