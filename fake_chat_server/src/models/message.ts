import { Document, Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const transform = (doc: any, ret: any, options: any) => {
    delete ret.__v;
    return ret
}

export interface IMessage extends Document {
    text: string;
    dialog: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    unread: boolean
}



export const MessageSchema: Schema<IMessage> = new Schema({
    text: { type: String, require: true },
    dialog: { type: Schema.Types.ObjectId, ref: "Dialogs", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    unread: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { transform: transform }
})

MessageSchema.plugin(() => uniqueValidator);


const MessageModel = model<IMessage>('Messages', MessageSchema)

export default MessageModel