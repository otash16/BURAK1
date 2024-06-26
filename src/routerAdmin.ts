import express, {Request, Response} from "express";
const router = express.Router();
import restaurantController from "./controllers/restaurant.controller";
/** RESTAURANT **/
router.get("/",restaurantController.goHome);

router.get("/login" ,restaurantController.login);
router.post("/login/processs" ,restaurantController.processlogin);

router.get("/signup" , restaurantController.signup);
router.post("/signup/process" ,restaurantController.processlogin);


/** PRODUCT **/

/** USER **/

export default router;