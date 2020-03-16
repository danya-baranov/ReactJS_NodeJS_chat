import { IUser } from './../models/user';
import { Response, Request } from 'express'
import { UserModel } from '../models';
import { createJWToken } from '../utils';

class UserController {
    getUserById(req: Request, res: Response) {
        const id: string = req.params.id
        UserModel.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    massage: "Not Found"
                })
            }
            res.json(user)
        })
    }

    getMe() {

    }

    createUser(req: Request, res: Response) {
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

    deleteUserById(req: Request, res: Response) {
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

    login(req:Request, res: Response){
        const postData = {
            email:req.body.login,
            password: req.body.password
        };

        UserModel.findOne({email: postData.email}, (err, user:IUser) =>{
            if(err){
                return res.status(404).json({
                    message: "User not found"
                });
            }

            if(user.password === postData.password){
                const token = createJWToken(user);
                res.json({
                    status:"succes",
                    token
                })
            }else{
                res.json({
                    status:"error",
                    message: "Incorrect password or email"
                })
            }
        });
    }
}

export default UserController