import { Response, Request } from 'express'
import { MessageModel } from '../models';


class MessageController {

    index(req: Request, res: Response) {
        const dialogId: string = req.query.dialog;

        MessageModel.find({ dialog: dialogId })
            .populate(["dialog"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({
                        message: "Messages not found"
                    });
                }
                return res.json(messages);
            });
    }

    createMessage(req: Request, res: Response) {

        const userId = "5e68eae9bc95bc55e4da7409";

        const postData = {
            text: req.body.text,
            dialog: req.body.dialog_id,
            user: userId
        };

        const message = new MessageModel(postData);

        message
            .save()
            .then((obj: any) => {
                res.json(obj);
            })
            .catch(reason => {
                res.json(reason);
            });
    }

    deleteMessage(req: Request, res: Response) {
        const id: string = req.params.id;
        MessageModel.findOneAndRemove({ _id: id })
            .then(message => {
                if (message) {
                    res.json({
                        message: `Message deleted`
                    });
                }
            })
            .catch(() => {
                res.json({
                    message: `Message not found`
                });
            });
    }
}

export default MessageController