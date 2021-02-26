import { Response, Request, NextFunction } from "express";
import mongoose from "../../database/connection";
import userModel from '../models/User';

const UserModel = mongoose.model("User", userModel);

type User = {
    name: String,
    age: Number
}

class UserController {

    async createUser(req : Request, res : Response) {
        const { name, age } = req.body;

        const verifyUser = await UserModel.find({name: name});
        const exists : Boolean = verifyUser.length > 0;

        try {
            if (name != undefined && age != undefined){
                if (!exists){
                    const user : User = {
                        name: name,
                        age: age
                    } 
        
                    const newUser = new UserModel(user);
                    await newUser.save();
        
                    res.status(201);
                    res.json({message: "User created!", user: newUser});
                } else {
                    res.status(400);
                    res.json({err: "User already exists!"});
                }
            } else {
                res.status(400);
                res.json({err: "Name or age not inserted!"});
            }             
        } catch (err){
            res.status(400);
            res.json({err: err.message});
        }
    }

    async getUsers (req : Request, res : Response) {
        try {
            const arr = await UserModel.find({});

            if (arr.length <= 0){
                res.status(404);
                res.json({err: "Não há nenhum usuário para ser retornado"});
            } else res.send(arr);
            
        } catch (err) {
            res.status(400);
            res.json({err: err.message});
        }
        
    }

    async getUserById(req : Request, res : Response){
        const id = req.params.id;

        res.send(await UserModel.find({_id: id}));
    }
}

export default new UserController();