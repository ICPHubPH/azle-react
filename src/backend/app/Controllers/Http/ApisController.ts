import { User } from "Database/entities/configuration";
import { Response, Request } from "express";
// import { User } from "../../../../types/UserTypes";

export default class ApisController {
  static async add_user(request: Request, response: Response) {
    const { username, email, password } = request.body as User;
    await User.insert({ username, email, password });
    response.json({ message: "User has been added!" });
  }

  static async get_users(request: Request, response: Response) {
    const users = await User.find();
    response.json({ data: users } );
  }

  static async update_user(request: Request, response: Response) {
    const { id, username, email, password } = request.body as User;
    await User.update({ id }, { username, email, password });
    response.json({ message: "User has been updated!" });
  }

  static async delete_user(request: Request, response: Response) {
    const { id } = request.body as User;
    await User.delete({ id });
    response.json({ message: "User has been deleted!" });
  }
  

  // static async greet(request: Request, response: Response) {
  //   response.json({ greeting: `Hello, ${request.query.name}` });
  // }

  // static async configurations(request: Request, response: Response) {
  //   const configuration = await Configuration.find();

  //   response.json({
  //     status: 1,
  //     data: configuration,
  //   });
  // }

  // static async insert_configuration(request: Request, response: Response) {
  //   const { key, value } = request.body;
  //   await Configuration.insert({ key, value });

  //   const checkIfExist = await Configuration.findBy({ key });

  //   if (!checkIfExist) {
  //     response.json({
  //       status: 0,
  //       message: "Configuration already exists!",
  //     });
  //   }

  //   response.json({
  //     status: 1,
  //     message: "Configuration has been inserted!",
  //   });
  // }

  // static async update_configuration(request: Request, response: Response) {
  //   const { key, value } = request.body;
  //   const getConfiguration = await Configuration.findBy({ key });

  //   if (!getConfiguration) {
  //     response.json({
  //       status: 0,
  //       message: "Configuration not found!",
  //     });
  //   }

  //   await Configuration.update({ key }, { value });
  //   response.json({
  //     status: 1,
  //     message: "Configuration has been updated!",
  //   });
  // }

  // static async delete_configuration(request: Request, response: Response) {
  //   const { key } = request.body;
  //   const getConfiguration = await Configuration.findBy({ key });

  //   if (!getConfiguration) {
  //     response.json({
  //       status: 0,
  //       message: "Configuration not found!",
  //     });
  //   }

  //   await Configuration.delete({ key });

  //   response.json({
  //     status: 1,
  //     message: "Configuration has been deleted!",
  //   });
  // }
}
