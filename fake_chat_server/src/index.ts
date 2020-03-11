import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

import { UserController, DialogController, MessageController } from './controllers';

const app = express()
const userController = new UserController()
const dialogController = new DialogController()
const messageController = new MessageController()


app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/chat', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})

app.get("/user/:id", userController.getUserById)
app.post("/user/create", userController.createUser)
app.delete("/user/delete/:id", userController.deleteUserById)

app.get("/dialogs/:id", dialogController.getDialogs)
app.post("/dialogs/create", dialogController.createDialog)
app.delete("/dialogs/delete/:id", dialogController.deleteDialogById)

app.get("/messages", messageController.index);
app.post("/messages", messageController.createMessage);
app.delete("/messages/:id", messageController.deleteMessage);

app.listen(3000, () => {
    console.log("Example app listening on port 3000!")
})

