import { Response, Request } from 'express'
import { DialogModel, MessageModel } from '../models';
import socket from "socket.io";
class DialogController {
    io: socket.Server;

    constructor(io: socket.Server) {
        this.io = io;
    }

    getDialogs = (req: any, res: Response) => {
        const authorId: string = req.user._id

        DialogModel.find({ author: authorId })
            .populate(["author", "partner"])
            .exec((err, dialogs) => {
                if (err) {
                    return res.status(404).json({
                        message: "Dialogs not found"
                    });
                }
                return res.json(dialogs);
            });
    }

    createDialog = (req: Request, res: Response) => {
        const postData = {
            owner: req.body.owner,
            partner: req.body.partner
        };
        const dialog = new DialogModel(postData)
        dialog
            .save()
            .then((dialogObj: any) => {
                const message = new MessageModel({
                    text: req.body.text,
                    user: req.body.author,
                    dialog: dialogObj._id
                });
                message
                    .save()
                    .then(() => {
                        res.json(dialogObj);
                    })
                    .catch(reason => {
                        res.json(reason);
                    });
            })
            .catch(reason => {
                res.json(reason);
            });
    }

    deleteDialogById = (req: Request, res: Response) => {
        const id: string = req.params.id
        DialogModel.findByIdAndRemove({ _id: id })
            .then(dialog => {
                if (dialog) {
                    res.json({
                        message: `Dialog deleted`
                    })
                }
            }).catch(() => {
                res.json({
                    message: "Dialog not found"
                })
            })
    }
}

export default DialogController