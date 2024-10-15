import { NextFunction, Request, Response } from "express";


export default class Pagination {
    static async paginate(request: Request, response: Response, next: NextFunction) {
        const page = request.query.page ? Number(request.query.page) : 1;
        const take = request.query.take ? Number(request.query.take) : 10;
        const skip = (page - 1) * take;

        request.limit = take;
        request.skip = skip;

        next();
    }
}