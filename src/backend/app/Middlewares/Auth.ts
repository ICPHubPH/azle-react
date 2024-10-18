import { NextFunction, Request, Response } from "express";
import { verifyToken } from "Helpers/jwt";

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

        if (!jsonData?.decoded)
          return response.status(401).json({
            status: 0,
            message: "Invalid token.",
          });

        request.user = jsonData.decoded.id as string;

        next();
      } catch (err) {
        console.log("ln33-auth");
        return response.status(403).json({
          status: 0,
          message: "Unauthorized!",
        });
      }
    }

    if (!token) {
      console.log("ln42-auth");
      return response.status(401).json({
        status: 0,
        message: "Unauthorized!",
      });
    }
  }
}
