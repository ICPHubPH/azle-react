import { generatePasswordHash, verifyPassword } from "App/utils/helpers";
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

      const user = new User();
      user.user_username = user_username;
      user.user_email = user_email;
      const password = generatePasswordHash(user_password);
      user.user_password = password.hash;
      user.user_salt = password.salt;

      // console.log(user_password);
      // console.log(password.hash);
      // console.log(password.salt);


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

    user_password = generatePasswordHash(user_password).hash;

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
    const { user_email, user_password } = request.body;

    try {
      const user = await User.findOneBy({ user_email });
      if (!user) {
        throw new Error("User not found!");
      }
      // console.log(user_password);
      // console.log(user.user_password);
      // console.log(user.user_salt);

      const isMatch = verifyPassword(user_password, user.user_password, user.user_salt);

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
      return response.status(400).json({ message: "Error in login", error: error });
    }
  }
}
