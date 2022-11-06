import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import UserRouter from "./routes/user.js";
import TodoRouter from "./routes/todo.js";


const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:false}));
app.use(express.urlencoded({limit:"30mb",extended:false}));
app.use(cors());
app.use("/api/users",UserRouter);
app.use("/api/todos",TodoRouter);


/*this additional thing save our app from getting crack when it loads 
    for the first time in our web browser.
*/
// app.get("/",(req,res)=>{
//     res.send("Welcome to Oyo Rooms Api");
// })


//automatic or default port no:-process.env.PORT
//default port no:-5000
const port = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGODB_URL,((err)=>{
        if(!err){
            console.log("DB connected")
        }else{
            console.log(err)
        }
    }))

app.listen(port,()=>console.log(`server running on port ${port}`));



