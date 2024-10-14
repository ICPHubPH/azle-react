import * as jwt from "jsonwebtoken";
export default class AuthMiddleware {
    static async authorize(request, response, next) {
        const authorization = request.headers.authorization;
        if (!authorization) {
            return response.status(401).json({
                status: 0,
                message: "Unauthorized!"
            });
        }
        const token = authorization.split(' ')[1];
        try {
            const isValid = jwt.verify(token, process.env.JWT_SECRET);
            request.user = isValid.sub;
            next();
        }
        catch {
            response.status(403).json({
                status: 0,
                message: "Forbidden!"
            });
        }
    }
}
