import { comparePassword, hashPassword } from "App/utils/helpers";
import { User } from "Database/entities/user";
import { Response, Request } from "express";

export default class UserController {
  static async users(request: Request, response: Response) {
    const users = await User.find(); // Returns all users

    response.json({
      status: 200,
      data: users,
    });
  }

  static async get_user(request: Request, response: Response) {
    const { user_id } = request.body;
    try {
      const user = await User.findBy({ user_id }); // Returns an array

      if (!user.length) { // Ensure the array is not empty
        return response.status(404).json({
          status: 404,
          message: "User not found!",
        });
      }

      response.json({
        status: 200,
        data: user[0],
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error in getting the user.", error });
    }
  }

  static async create_user(request: Request, response: Response) {
    let { user_username, user_email, user_password } = request.body;

    try {
      const checkIfExist = await User.findOneBy({ user_username });

      if (checkIfExist) {
        return response.status(400).json({
          status: 400,
          message: "Username already exists!",
        });
      }

      const hashedPassword = await hashPassword(user_password); // Hash the password

      const user = new User();
      user.user_username = user_username;
      user.user_email = user_email;
      user.user_password = hashedPassword; // Use the hashed password
      user.classes = [];

      await User.insert(user);
      return response.status(201).json({ message: "User has been created!" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error in creating the user.", error });
    }
  }

  static async update_user(request: Request, response: Response) {
    let { user_id, user_username, user_email, user_password } = request.body;

    try {
      const user = await User.findOneBy({ user_id });

      if (!user) {
        return response.status(404).json({
          status: 404,
          message: "User not found!",
        });
      }

      if (user_password) {
        // If a new password is provided, hash it before updating
        user_password = await hashPassword(user_password);
      }

      await User.update(
        { user_id },
        { user_username, user_email, user_password }
      );
      return response.status(200).json({
        status: 200,
        message: "User has been updated!",
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error in updating the user.", error });
    }
  }

  static async delete_user(request: Request, response: Response) {
    const { user_id } = request.body;

    try {
      const user = await User.findOneBy({ user_id });

      if (!user) {
        return response.status(404).json({
          status: 404,
          message: "User not found!",
        });
      }

      await User.delete({ user_id });

      return response.status(200).json({
        status: 200,
        message: "User has been deleted!",
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error in deleting the user.", error });
    }
  }

  static async login(request: Request, response: Response) {
    const { user_username, user_password } = request.body;

    try {
      const user = await User.findOneBy({ user_username });

      if (!user) {
        return response.status(404).json({
          status: 404,
          message: "User not found!",
        });
      }

      const isMatch = await comparePassword(user_password, user.user_password);

      if (!isMatch) {
        return response.status(400).json({
          status: 400,
          message: "Invalid password!",
        });
      }

      return response.status(200).json({
        status: 200,
        message: "Login successful!",
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error in logging in the user.", error });
    }
  }
}
