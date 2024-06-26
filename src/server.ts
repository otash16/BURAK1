import dotenv from "dotenv";
dotenv.config();

console.log("PORT:", process.env.PORT);
console.log("MOGO URL: ",process.env.MONGO_URL);