import { IUser } from './../models/user';
import { Response, Request } from 'express'
import { UserModel } from '../models';
import { createJWToken, generatePasswordHash } from '../utils';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import socket from "socket.io";


class UserController {

    io: socket.Server;

    constructor(io: socket.Server) {
        this.io = io;
    }


    getUserById = (req: Request, res: Response) => {
        const id: string = req.params.id
        UserModel.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    massage: "User Not Found"
                })
            }
            res.json(user)
        })
    }

    getMe = (req: any, res: Response) => {
        const id: string = req.user._id;
        console.log(id)
        UserModel.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: "Users not found",
                });
            }
            res.json(user);
        });
    };

    createUser = (req: Request, res: Response) => {
        const postData = {
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
        };
        const user = new UserModel(postData)
        user.save().then((obj: any) => {
            res.json(obj)
        }).catch(reason => {
            res.json(reason)
        })
    }

    deleteUserById = (req: Request, res: Response) => {
        const id: string = req.params.id
        UserModel.findByIdAndRemove({ _id: id })
            .then(user => {
                if (user) {
                    res.json({
                        message: `User ${user.fullName} deleted`
                    })
                }
            }).catch(() => {
                res.json({
                    message: "User not found"
                })
            })
    }

    login = (req: Request, res: Response) => {
        const postData = {
            email: req.body.email,
            password: req.body.password
        };
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        UserModel.findOne({ email: postData.email }, (err, user: IUser) => {
            if (err || !user) {
                return res.json({
                    status: "error",
                    message: "User not found"
                });
            }

            if (bcrypt.compareSync(postData.password, user.password as string)) {
                const token = createJWToken(user);
                res.json({
                    status: "success",
                    token
                })
            } else {
                res.json({
                    status: "error",
                    message: "Incorrect password or email"
                })
            }
        });
    }
}

export default UserController