import { UserModel } from '../models'
import { Response, Request, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
    UserModel.findOneAndUpdate(
        { _id: "5e68eae9bc95bc55e4da7409" },
        { last_seen: new Date() },
        { new: true },
        () => {});
    next();
}