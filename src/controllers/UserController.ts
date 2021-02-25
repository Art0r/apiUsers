import { Response, Request, NextFunction } from "express";
import mongoose from "../../database/connection";
import userModel from '../models/User';

const User = mongoose.model("User", userModel);

class UserController {
    
    async getUsers (req : Request, res : Response) {
        res.send(await User.find({}));
    }
}

export default new UserController();