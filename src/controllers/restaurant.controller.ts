import {Request, Response} from "express";
import {T} from "../libs/types/common";

const memberController: T={};

memberController.goHome = (req: Request, res: Response) =>{
    try{
        res.send("Home Page");
    }
    catch(err){
        console.log("ERROR, goHome", err);
    }
}

memberController.login = (req: Request, res: Response) =>{
    try{
        res.send("Login page");
    }
    catch(err){
        console.log("ERROR, on login page", err);
    }
}

memberController.signup = (req: Request, res: Response) =>{
    try{
        res.send("Signup page");
    }
    catch(err){
        console.log("ERROR, on signup page", err);
    }
}

export default memberController;