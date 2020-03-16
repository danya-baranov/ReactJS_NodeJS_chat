import { Request, Response, NextFunction } from "express";
import { verifyJWTToken } from "../utils";
import { IUser } from "../models/user";

export interface AuthRequest extends Request {
    user: IUser;
    token: string;
  }


export default (req: any, res: Response, next: NextFunction) => {
    if (req.path !== "/user/login") {
    }

    const token = req.headers.token;

    verifyJWTToken(token as string)
        .then((user: any) => {
            req.user = user;
            next();
        })
        .catch(() => {
            res.status(403).json({ message: "Invalid auth token provided." });
        });
};