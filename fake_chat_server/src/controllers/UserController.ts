import { Response, Request } from 'express'
import { UserModel } from '../models';

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
}

export default UserController