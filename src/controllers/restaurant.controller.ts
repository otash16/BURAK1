import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"

const restaurantController: T={};

restaurantController.goHome = (req: Request, res: Response) =>{
    try{
        console.log("goHome");
        res.send("Home Page");
    }
    catch(err){
        console.log("ERROR, goHome", err);
    }
};

restaurantController.login = (req: Request, res: Response) =>{
    try{
        console.log("\n\nLogin Page");
        res.send("Login page");
       
    }
    catch(err){
        console.log("ERROR, on login page", err);
    }
};

restaurantController.signup = (req: Request, res: Response) =>{
    try{
        res.send("Signup page");
    }
    catch(err){
        console.log("ERROR, on signup page", err);
    }
};

export default restaurantController;