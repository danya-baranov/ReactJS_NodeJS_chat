import bodyParser from 'body-parser';
import { Express } from 'express'
import socket from "socket.io";
import { UserController, DialogController, MessageController } from '../controllers';
import { updateLastSeen, checkAuth } from "../middlewares";

import { loginValidation } from '../utils/validations';

const createRoutes = (app: Express, io: socket.Server) => {
    app.use(bodyParser.json());
    app.use(updateLastSeen);
    app.use(checkAuth);

    const userController = new UserController(io)
    const dialogController = new DialogController(io)
    const messageController = new MessageController(io)


    app.get("/users/:id", userController.getUserById)
    app.get('/user/me', userController.getMe)
    app.post("/user/signup", userController.createUser)
    app.post("/user/signin", loginValidation, userController.login)
    app.delete("/user/delete/:id", userController.deleteUserById)

    app.get("/dialogs", dialogController.getDialogs)
    app.post("/dialogs", dialogController.createDialog)
    app.delete("/dialogs/:id", dialogController.deleteDialogById)

    app.get("/messages", messageController.index);
    app.post("/messages", messageController.createMessage);
    app.delete("/messages/:id", messageController.deleteMessage);
}

export default createRoutes;