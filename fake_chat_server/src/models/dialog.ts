import { Document, Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const transform = (doc: any, ret: any, options: any) => {
    delete ret.__v;
    return ret
}

export interface Dialog extends Document {
    owner: {
        type: Schema.Types.ObjectId,
        ref: string
    },
    partner: {
        type: Schema.Types.ObjectId,
        ref: string
    }
    lastMessage: {
        type: Schema.Types.ObjectId,
        ref: string
    }
}



export const DialogSchema: Schema<Dialog> = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: "Users", require: true },
    partner: { type: Schema.Types.ObjectId, ref: "Users", require: true },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
}, {
    timestamps: true,
    toJSON: { transform: transform }
})

DialogSchema.plugin(() => uniqueValidator);


const DialogModel = model<Dialog>('Dialogs', DialogSchema)

export default DialogModel