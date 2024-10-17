import { comparePassword, hashPassword } from "App/utils/helpers";
import { User } from "Database/entities/user";
import { Response, Request } from "express";

export default class UserController {
  static async users(request: Request, response: Response) {
    const users = await User.find(); //ibabalik nya lahat ng users

    response.json({
      status: 200,
      data: users,
    });
  }

  static async get_user(request: Request, response: Response) {
    const { user_id } = request.body;
    const user = await User.findBy({ user_id }); //kukunin nya isang user
    try {
      if (!user) {
        response.status(400);
        return response.json({
          status: 400,
          message: "User not found!",
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Error in getting the user.", error });
    }
  }

  static async create_user(request: Request, response: Response) {
    let { user_username, user_email, user_password } = request.body;

    try {
      const checkIfExist = await User.findOneBy({ user_username });

      if (checkIfExist) {
        response.status(400);
        return response.json({
          status: 400,
          message: "Username already exists!",
        });
      }
      const user = new User();
      user.user_username = user_username;
      user.user_email = user_email;
      user.user_password = user_password;
      user.classes = [];

      await User.insert(user);
      return response.status(200).json({ message: "User has been created!" });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Error in creating the user.", error });
    }
  }

  static async update_user(request: Request, response: Response) {
    let { user_id, user_name, user_username, user_email, user_password } =
      request.body;
    const getConfiguration = await User.findBy({ user_id });

    if (!getConfiguration) {
      // if hindi nageexist yung dapat na iuupdate na data magrereturn ng error
      return response.json({
        status: 400,
        message: "User not found!",
      });
    }
    // if nageexist, iuupdate na nya yung value

    // user_password = hashPassword(user_password);

    await User.update(
      { user_id },
      { user_username, user_email, user_password }
    );
    return response.json({
      status: 200,
      message: "User has been updated!",
    });
  }

  static async delete_user(request: Request, response: Response) {
    const { user_id } = request.body;
    const getConfiguration = await User.findBy({ user_id });

    if (!getConfiguration) {
      // if hindi nageexist yung dapat na idedelete na data, magrereturn ng error
      return response.json({
        status: 400,
        message: "User not found!",
      });
    }

    // if nageexist idedelete na nya
    await User.delete({ user_id });

    return response.json({
      status: 200,
      message: "User has been deleted!",
    });
  }

  static async login(request: Request, response: Response) {
    const { user_username, user_password } = request.body;

    try {
      const user = await User.findOneBy({
        user_username,
      });

      if (!user) {
        return response.json({
          status: 400,
          message: "User not found!",
        });
      }


      if (!(await comparePassword(user_password, user.user_password))) {
        return response.json({
          status: 400,
          message: "Invalid password!",
        });
      }

      return response.json({
        status: 200,
        message: "Login successful!",
      });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Error in logging in the user.", error });
    }
  }
}
