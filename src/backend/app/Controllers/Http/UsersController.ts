import UserLoginValidator from "App/Validators/UserLoginValidator";
import UserRegisterValidator from "App/Validators/UserRegisterValidator";
import { User } from "Database/entities/user";
import type { Response, Request } from "express";
import { hash } from "Helpers/hashing";

export namespace UsersController {
  export async function register(request: Request, response: Response) {
    const { data, success, error } = UserRegisterValidator.validate(request.body);

    if (!success) {
      response.status(400);
      const { path, message } = error.issues?.[0];

      return response.json({
        status: 0,
        message: `${path?.join('.')}: ${message}`,
        data: data
      });
    }

    const { email, password, name, location, principal } = data;

    const passwordHash = password ? await hash(password) : undefined;

    const userData: Partial<User> = {
      email,
      password_hash: passwordHash,
      name,
      location,
      principal_id: principal,
    };

    try {
      const isUserExists = await User.findOne({
        where: [{ email }, { principal_id: principal }],
      });

      if (isUserExists) {
        response.status(400);
        return response.json({
          status: 0,
          message: 'Email/Identity already exists.',
        });
      }

      await User.save(userData);

      return response.json({
        status: 1,
        message: 'Registration success!',
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }

  export async function login(request: Request, response: Response) {
    const { data, success, error } = UserLoginValidator.validate(request.body);

    if (!success) {
      response.status(400);
      const { path, message } = error.issues?.[0];

      return response.json({
        status: 0,
        message: `${path?.join('.')}: ${message}`,
        data: data
      });
    }

    const { email, password, principal } = data;

    const passwordHash = password ? await hash(password) : undefined;

    const userData: Partial<User> = {
      email,
      password_hash: passwordHash,
      principal_id: principal,
    };

    try {
      const isUserExists = await User.findOne({
        where: [{ email }, { principal_id: principal }],
      });

      if (!isUserExists) {
        response.status(400);
        return response.json({
          status: 0,
          message: 'Email/Identity not found.',
        });
      }

      response.status(200);
      return response.json({
        status: 1,
        message: 'Login success!',
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }

  export async function test(request: Request, response: Response) {
    const users = await User.find();

    return response.json({
      status: 1,
      message: "Test success!",
      data: users,
    });
  }
}