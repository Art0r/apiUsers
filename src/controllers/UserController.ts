import { Response, Request, NextFunction } from "express";
import mongoose from "../../database/connection";
import userModel from '../models/User';

const UserModel = mongoose.model("User", userModel);

type User = {
    name: String,
    age: Number
}

class UserController {

    async getUsers (req : Request, res : Response) {
        res.send(await UserModel.find({}));
    }

    async createUser(req : Request, res : Response) {
        const { name, age } = req.body;
        try {

            const user : User = {
                name: name,
                age: age
            } 

            const newUser = new UserModel(user);
            await newUser.save();

            res.status(201);
            res.json({message: "User created!", user: newUser});


        } catch (err){

            res.status(400);
            res.json({err: err.message})
        }
    }
}

export default new UserController();