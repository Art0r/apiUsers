import express from "express";
import mongoose from "../database/connection";
import userModel from './models/User';

const User = mongoose.model("User", userModel);
const app = express();

interface userArguments {
    name: String,
    age: Number
}

type user = {
    name: String,
    age: Number
}

function getUser(args: userArguments){
    return {
        name: args.name, 
        age: args.age
    };
}

function getUser1(args: user) : userArguments {
    return {
        name: args.name,
        age: args.age
    };
}

app.get("/db", async (req, res) => {
    const user = new User({name: "Arthur", agr: 20});
    await user.save();

    res.send(await User.find({}));
});

app.get("/user", (req, res) => {
    res.send(getUser1({name: "Arthur", age: 19}));
});

app.get("/", (req, res) => {

    const arthur:user = {
        name: "Arthur",
        age: 19
    }
    res.send(getUser(arthur));
});

app.listen("8000", () => {
    console.log("app rodando!");
});