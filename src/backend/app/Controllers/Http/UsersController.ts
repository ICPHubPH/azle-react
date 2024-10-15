import { dataCertificate } from "azle/src/lib/ic/data_certificate";
import { User } from "Database/entities/user";
import type { Response, Request } from "express";

export namespace UsersController {
  export async function register(request: Request, response: Response) {
    // const { data, success, error } = UserRegisterValidator.validate(request.body);

    // if (!success) {
    //   response.status(400);
    //   const { path, message } = error.issues?.[0];

    //   return response.json({
    //     status: 0,
    //     message: `${path?.join('.')}: ${message}`,
    //   });
    // }

    // const { email, firstName, lastName, location, principal } = data;

    // const userData: Partial<User> = {
    //   email,
    //   password_hash,
    //   first_name: firstName,
    //   last_name: lastName,
    //   location,
    //   principal_id: principal.toText(),
    // };

    // try {
    //   const isUserExists = await User.findOne({
    //     where: [{ email }, { principal_id: ic.caller().toText() }, { username }],
    //   });

    //   if (isUserExists) {
    //     response.status(400);
    //     return response.json({
    //       status: 0,
    //       message: 'Username/Email/Identity already taken.',
    //     });
    //   }

    //   await User.save(userData);

    //   return response.json({
    //     status: 1,
    //     message: 'Registration success!',
    //   });
    // } catch (error: any) {
    //   response.status(400);
    //   return response.json({
    //     status: 0,
    //     message: error.message,
    //   });
    // }
  }

  export async function test(request: Request, response: Response) {
    return response.json({
      status: 1,
      message: "Test success!",
    });
  }
}