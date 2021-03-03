import { Response, Request, NextFunction } from "express";
import mongoose from "../../database/connection";
import userModel from '../models/User';

const UserModel = mongoose.model("User", userModel);

type User = {
    email: String,
    name: String,
    age: Number
}

class UserController {

    async createUser(req : Request, res : Response) {
        const { email, name, age } = req.body;

        const verifyUser = await UserModel.find({email: email});
        const exists : Boolean = verifyUser.length > 0;

        try {
            if (email != null && name != null && age != null){
                if (!exists){
                    const user : User = {
                        email: email,
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
                res.json({err: "Email, Name or age not inserted!"});
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

    async getUserByEmail(req : Request, res : Response){
        const email = req.params.email;

        res.send(await UserModel.find({email: email}));
    }

    async modifyUser(req : Request, res : Response) {
        const id = req.params.id;
        let { email, name, age } = req.body;

        if (id != undefined){
            try{
                const user : any = await UserModel.findById(id); 

                const verifyEmail = email == null || email == "" || email == " ";
                const verifyName = name == null || name == "" || name == " ";
                const verifyAge = age == null || age == "" || age == " ";
    
                if (verifyEmail){
                    email = user.email;
                }
        
                if (verifyName){
                    name = user.name;
                }
        
                if (verifyAge){
                    age = user.age
                }

                const modifiedUser : User = {
                    name: name,
                    email: email,
                    age: age
                }
        
                await UserModel.findByIdAndUpdate(id, modifiedUser);
        
                res.status(200);
                res.json({msg: "Usuário modificado!"});
            } catch (e) {
                res.status(400);
                res.json({err: e.message})
            }
        } else {
            res.status(404)
            res.json({err: "Id não especificado!"})
        }
    }
}

export default new UserController();