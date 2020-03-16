import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

import { UserController, DialogController, MessageController } from './controllers';
import { updateLastSeen , checkAuth } from "./middlewares";
import dotenv from 'dotenv'


const app = express()
dotenv.config();

const userController = new UserController()
const dialogController = new DialogController()
const messageController = new MessageController()

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);

mongoose.connect('mongodb://localhost:27017/chat', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

app.get("/user/:id", userController.getUserById)
app.post("/user/create", userController.createUser)
app.post("/user/login", userController.login)
app.delete("/user/delete/:id", userController.deleteUserById)

app.get("/dialogs/:id", dialogController.getDialogs)
app.post("/dialogs/create", dialogController.createDialog)
app.delete("/dialogs/delete/:id", dialogController.deleteDialogById)

app.get("/messages", messageController.index);
app.post("/messages", messageController.createMessage);
app.delete("/messages/:id", messageController.deleteMessage);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})

