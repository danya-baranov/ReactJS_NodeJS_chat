import { Document, Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import  Validator from "validator";
import { generatePasswordHash } from '../utils';
const transform = (doc: any, ret: any, options: any) => {
    delete ret.__v;
    return ret
}

export interface IUser extends Document {
    email?: string;
    fullName?: string;
    password?: string;
    confirmed?: boolean;
    avatar?: string;
    confirm_hash?: string;
    last_seen?: Date;
}



export const UserSchema: Schema<IUser> = new Schema({
    email: {
        type: String,
        require: "Email address is required",
        validate: [Validator.isEmail, 'Invalid email'],
        unique: true
    },
    fullName: {
        type: String,
        required: "Fullname is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    avatar: String,
    confirm_hash: String,
    last_seen: {
        type: Date,
        default: new Date()
    },
}, {
    timestamps: true,
    toJSON: { transform: transform }
})

UserSchema.pre('save', function(next) {
    const user: IUser = this;
  
    if (!user.isModified('password')) return next();
  
    generatePasswordHash(user.password)
      .then(hash => {
        user.password = String(hash);
        next();
      })
      .catch(err => {
        next(err);
      });
  });


UserSchema.plugin(() => uniqueValidator);


const UserModel = model<IUser>('Users', UserSchema)

export default UserModel