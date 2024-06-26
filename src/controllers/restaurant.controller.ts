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

restaurantController.processlogin = (req: Request, res: Response) =>{
    try{
        console.log("Proces login");
        res.send("Process login");
    }
    catch(err){
        console.log("ERROR, on login page", err);
    }
};

restaurantController.processsignup = (req: Request, res: Response) =>{
    try{
        console.log("Proces signup");
        res.send("Process sigupn");
    }
    catch(err){
        console.log("ERROR, on login page", err);
    }
};

export default restaurantController;