import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import mongoose from "mongoose";
console.log("server.js");
mongoose.connect(process.env.MONGO_URL as string,{})
.then((data) =>{
    console.log("MongoDB connection SUCCEED")
    const PORT = process.env.PORT ??  3003;
    app.listen(PORT, function(){
        console.log(`The server is successfully running on ${PORT}`);
    })
})
.catch((err) => console.log("Error on connection MongoDB", err));