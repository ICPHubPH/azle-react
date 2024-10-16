import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export default class AuthMiddleware {
    static async authorize(request: Request, response: Response, next: NextFunction) {
        const authorization = request.headers.authorization;
    
        if (!authorization) {
            return response.status(401).json({
                status: 0,
                message: "Unauthorized!"
            });
        }
    
        const token = authorization.split(' ')[1];
    
        try {
            // NOTE: external api service for token verification
            const isValid = await jwt.verify(token, process.env.JWT_SECRET!);

            if (!isValid) return response.status(401).json({
                status: 0,
                message: "Unauthorized!"
            });

            request.user = isValid.sub as string;
            
            next();
        } catch {
            response.status(403).json({
                status: 0,
                message: "Forbidden!"
            })
        }
    }

    static async authTest(request: Request, response: Response, next: NextFunction) {
        const authorization = request.headers["authorization"];
        const token = authorization?.split(" ")[1];
        console.log(token);

        if (token?.length == 0) {
            return response.status(401).json({
                status: 0,
                message: "Unauthorized!"
            });
        }

        request.user = token;

        next();
    }
}