import { Post } from "Database/entities/post";
import { User } from "Database/entities/user";
import { Request, Response } from "express";

export default class PostController {
    static async getAll(request: Request, response: Response) {
        try {
            const skip = request.skip;
            const take = request.limit;
            
            const data = await Post.findAndCount({
                select: {
                    id: true,
                    title: true,
                    content: true,
                    type: true,
                    thumbnail: true,
                    createdAt: true,
                    user: {
                        id: true,
                        name: true,
                        email: true,
                        avatarUrl: true,
                    }
                },
                skip,
                take
            });

            response.status(200).json({
                success: 1,
                data,
                message: null
            });
        } catch (error) {
            response.status(500).json({
                success: 0,
                error,
                message: "Internal server error!"
            })
        }
    }

    static async findByCategorytype(request: Request, response: Response) {
        try {
            const skip = request.skip;
            const take = request.limit;

            const type = request.params.type; // post scholarship type

            const data = await Post.findAndCount({
                where: {
                    type
                },
                skip,
                take,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    type: true,
                    thumbnail: true,
                    createdAt: true,
                    user: {
                        id: true,
                        name: true,
                        email: true,
                        avatarUrl: true
                    }
                }
            });

            response.status(200).json({
                success: 1,
                data,
                message: null
            });
        } catch (error) {
            response.status(500).json({
                success: 0,
                error,
                message: "Internal server error!"
            });
        }
    }

    static async findById(request: Request, response: Response) {
        const id = request.params.id;
        
        const data = await Post.findOne({
            where: {
                id
            },
            select: {
                id: true,
                user: {
                    id: true,
                    name: true,
                    email: true,
                    avatarUrl: true
                },
                title: true,
                thumbnail: true,
                content: true,
                type: true,
                createdAt: true,
                updatedAt: true
            }
        });

        if (!data) {
            response.status(404).json({
                status: 0,
                message: "Post not found!"
            });
        }
        
        response.status(200).json({
            success: 1,
            data,
            message: null
        });
    }

    // TODO: Thumbnail upload
    static async create(request: Request, response: Response) {
        try {
            const { title, thumbnail, type, content } = request.body;
            const userExists = await User.findOneBy({ id: request.user });

            if (!userExists) {
                return response.status(401).json({
                    status: 0,
                    message: "Unauthorized!"
                });
            }

            if (userExists.role == "student") {
                return response.status(403).json({
                    status: 0,
                    message: "Forbidden!"
                });
            }

            const data = await Post.create({
                title,
                content,
                thumbnail,
                type,
                user: userExists
            });

            await Post.save(data);

            return response.status(201).json({
                status: 1,
                data,
                message: "New post created!"
            });
        } catch (error) {
            response.status(500).json({
                success: 0,
                error,
                message: "Internal server error!"
            })
        }
    }

    // TODO: thumbnail upload and deletion
    static async updateById(request: Request, response: Response) {
        const id = request.params.id;
        const { title, type, content } = request.body;

        const isPostExist = await Post.findOne({ 
            where: {
                id
            }, 
            select: {
                user: {
                    id: true,
                    role: true
                }
            }
         });

        if (!isPostExist) {
            response.status(404).json({
                status: 0,
                data: null,
                message: "Post not found!"
            });
        }

        if (isPostExist?.user.id != request.user && isPostExist?.user.role == "admin") {
            response.status(403).json({
                status: 0,
                data: null,
                message: "Unauthorized!"
            });
        }

        await Post.update({ id }, { title, type, content });

        response.status(200).json({
            success: 1,
            data: null,
            message: "Post has been updated!"
        });
    }
    
    // TODO: thumbnail deletion
    static async deleteById(request: Request, response: Response) {
        const id = request.params.id;

        const isPostExist = await Post.findOne({
            where: {
                id
            },
            select: {
                id: true,
                user: {
                    id: true,
                    role: true
                }
            }
        });

        if (!isPostExist) {
            response.status(404).json({
                success: 0,
                data: null,
                message: "Post doesn't exist!"
            });
        }

        if (isPostExist?.user.id != request.user && isPostExist?.user.role != "admin") {
            response.status(403).json({
                success: 0,
                data: null,
                message: "Forbidden!"
            });
        }

        const data = await Post.delete({ id });

        response.status(200).json({
            success: 1,
            data,
            message: "Post has been deleted!"
        });
    }

    // admin user management
  static async archiveById(request: Request, response: Response) {
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
          message: "User not found!"
        });
      }

      if (!post.archivedAt) {
        post.archivedAt = new Date();
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

    static async unarchiveById(request: Request, response: Response) {
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
              message: "User not found!"
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
}
