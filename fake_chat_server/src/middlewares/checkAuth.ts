import { Request, Response, NextFunction } from "express";
import { verifyJWTToken } from "../utils";


export default (req: any, res: Response, next: NextFunction) => {
    if (req.path === "/user/signin" ||
        req.path === "/user/signup") {
        return next()
    }

    const token = req.headers.token;
    verifyJWTToken(token as string)
        .then((user: any) => {
            req.user = user.data._doc;
            next();
        })
        .catch(() => {
            res.status(403).json({ message: "Invalid auth token provided." });
        });
};