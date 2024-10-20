import { User } from "Database/entities/user";
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "Helpers/jwt";
import { httpResponseError } from "Helpers/response";

export default class AuthMiddleware {
  static async authorize(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let token;
    const authorization = request.headers.authorization;

    if (authorization && authorization.startsWith("Bearer")) {
      try {
        token = authorization.split(" ")[1];

        const jsonData = await verifyToken(token);

        if (!jsonData?.decoded) {
          return httpResponseError(response, null, "Invalid token", 401);
        }

        request.user = jsonData.decoded.id as string;

        next();
      } catch (err) {
        console.log("ln33-auth");
        return httpResponseError(response, null, "Unauthorized!", 401);
      }
    }

    if (!token) {
      console.log("ln42-auth");
      return httpResponseError(response, null, "Unauthorized!", 401);
    }
  }

  static async hasAdminAccess(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let token;
    const authorization = request.headers.authorization;

    if (authorization && authorization.startsWith("Bearer")) {
      try {
        token = authorization.split(" ")[1];

        const jsonData = await verifyToken(token);

        if (!jsonData?.decoded) {
          return httpResponseError(response, null, "Invalid token!", 401);
        }

        const user = await User.findOneBy({id: jsonData.decoded.id});

        if (user?.role !== "admin") {
          return httpResponseError(response, null, "Forbidden", 403);
        }

        request.user = jsonData.decoded.id as string;

        next();
      } catch (err) {
        console.log("ln75-auth");
        return httpResponseError(response, null, "Unauthorized!", 401);
      }
    }

    if (!token) {
      console.log("ln84-auth");
      return httpResponseError(response, null, "Unauthorized!", 401);
    }
  }
}
