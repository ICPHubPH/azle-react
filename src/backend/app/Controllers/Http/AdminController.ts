import { Post } from "Database/entities/post";
import { User } from "Database/entities/user";
import { Request, Response } from "express";
import { httpResponseError, httpResponseSuccess } from "Helpers/response";
import { IsNull, Not } from "typeorm";


export default class AdminController {
  static async archiveUserById(request: Request, response: Response) {
    try {
      const currentUser = await User.findOneBy({ id: request.user });

      // check if auth user exists
      if (!currentUser) {
        return response.status(401).json({
          status: 0,
          message: "Unauthorized!"
        });
      }

      // check if user role is admin
      if (currentUser.role != "admin") {
        return response.status(403).json({
          status: 0,
          message: "Forbidden!"
        });
      }

      const id = request.params.id;
      const user = await User.findOneBy({ id });

      
      // check if user exists
      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!"
        });
      }

      if (!user.archivedAt) {
        user.archivedAt = new Date();
        user.save();
      }

      return response.status(500).json({
        status: 0,
        message: "User archived."
      });
    } catch (error) {
      return response.status(500).json({
        status: 0,
        message: "Server error"
      });
    }
  }
    
  static async unarchiveUserById(request: Request, response: Response) {
    try {
      const currentUser = await User.findOneBy({ id: request.user });

      if (!currentUser) {
        return response.status(401).json({
          status: 0,
          message: "Unauthorized!"
        });
      }

      if (currentUser.role != "admin") {
        return response.status(403).json({
          status: 0,
          message: "Forbidden!"
        });
      }

      const id = request.params.id;
      const user = await User.findOneBy({ id });

      if (!user) {
        return response.status(404).json({
          status: 0,
          message: "User not found!"
        });
      }

      if (user.archivedAt) {
        user.archivedAt = null;
        user.save();
      }

      return response.status(500).json({
        status: 0,
        message: "User archived."
      });
    } catch (error) {
      return response.status(500).json({
        status: 0,
        message: "Server error"
      });
    }
  }

  static async verifyProvider(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({ id: request.user });

      if (!user) {
        return response.status(401).json({
          status: 0,
          message: "Unauthorized!"
        });
      }

      if (user.role != "admin") {
        return response.status(403).json({
          status: 0,
          message: "Forbidden!"
        });
      }

      const id = request.params.id;
      const provider = await User.findOne({
        where: {
          id,
          archivedAt: IsNull(),
          providerVerifiedAt: IsNull(),
          role: "provider"
        }
      });

      if (!provider) {
        return response.status(404).json({
          status: 0,
          message: "Provider not found!"
        });
      }

      provider.providerVerifiedAt = new Date();
      await provider.save();

      return response.status(200).json({
        status: 1,
        data: provider,
        message: "Provider has been verified!"
      });
    } catch (error) {
      return response.status(500).json({
        status: 0,
        error,
        message: "Server error"
      });
    }
  }

  static async archivePostById(request: Request, response: Response) {
    try {
        const currentUser = await User.findOneBy({ id: request.user });

        // check if auth user exists
        if (!currentUser) {
            return response.status(401).json({
            status: 0,
            message: "Unauthorized!"
            });
        }

        // check if user role is admin
        if (currentUser.role != "admin") {
            return response.status(403).json({
            status: 0,
            message: "Forbidden!"
            });
        }

        const id = request.params.id;
        const post = await Post.findOneBy({ id });

        
        // check if post exists
        if (!post) {
            return response.status(404).json({
            status: 0,
            message: "Post not found!"
            });
        }

        if (!post.archivedAt) {
            post.archivedAt = new Date();
            post.save();
        }

        return response.status(201).json({
            status: 0,
            message: "Post archived."
        });
    } catch (error) {
    return response.status(500).json({
        status: 0,
        message: "Server error"
    });
    }
  }

  static async unarchivePostById(request: Request, response: Response) {
    try {
      const currentUser = await User.findOneBy({ id: request.user });

      if (!currentUser) {
        return response.status(401).json({
          status: 0,
          message: "Unauthorized!"
        });
      }

      if (currentUser.role != "admin") {
        return response.status(403).json({
          status: 0,
          message: "Forbidden!"
        });
      }

      const id = request.params.id;
      const post = await Post.findOneBy({ id });

      if (!post) {
        return response.status(404).json({
          status: 0,
          message: "Post not found!"
        });
      }

      if (post.archivedAt) {
        post.archivedAt = null;
        post.save();
      }

      return response.status(500).json({
        status: 0,
        message: "User archived."
      });
    } catch (error) {
      return response.status(500).json({
        status: 0,
        message: "Server error"
      });
    }
  }

  // get archive users and posts
  static async getArchivedUsers(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({
        id: request.user
      });

      if (!user) {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      if (user.role != "admin") {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      const skip = request.skip;
      const take = request.limit;

      const data = await User.findAndCount({
        where: {
          archivedAt: Not(IsNull())
        },
        skip,
        take
      });

      httpResponseSuccess(response, { users: data[0], count: data[1] }, null, 200);
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }
  // get non verified users
  static async getNonVerifiedUsers(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({
        id: request.user
      });

      if (!user) {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      if (user.role != "admin") {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      const skip = request.skip;
      const take = request.limit;

      const data = await User.findAndCount({
        where: {
          archivedAt: IsNull(),
          emailVerifiedAt: IsNull()
        },
        skip,
        take
      });

      httpResponseSuccess(response, { users: data[0], count: data[1] }, null, 200);
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }

  // get non verified providers (admin management)
  static async getNonVerifiedProviders(request: Request, response: Response) {
    try {
      const user = await User.findOneBy({
        id: request.user
      });

      if (!user) {
        return httpResponseError(response, null, "Unauthorized!", 401);
      }

      if (user.role != "admin") {
        return httpResponseError(response, null, "Forbidden!", 403);
      }

      const skip = request.skip;
      const take = request.limit;

      const data = await User.findAndCount({
        where: {
          archivedAt: IsNull(),
          providerVerifiedAt: Not(IsNull())
        },
        skip,
        take
      });

      httpResponseSuccess(response, { users: data[0], count: data[1] }, null, 200);
    } catch (error) {
      httpResponseError(response, null, "Internal Server Error!", 500);
    }
  }
}