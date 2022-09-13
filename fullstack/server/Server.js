const express=require("express");
const server=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require("bcryptjs")
const SignupModel=require("./models/SignupModal")
const MONGOURI="mongodb+srv://Subho:2022@socialmedia.s3obl.mongodb.net/test"
const PORT=7070;
const cors = require("cors");
server.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server started at ${PORT}`)
    }else{
        console.log(err)
    }
});
mongoose.connect(MONGOURI,(err)=>{
    !err? console.log("DB connected"):(console.log(err))
});
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cors())
//test server
server.get("/",(req,res)=>{
    res.send("Router started")
})
//signup server
server.post("/signup",(req,res)=> {
    let {email, password, cpassword}=req.body

    if (!email || !password || !cpassword) {
        return res.status(400).send('Please Fill the Field')
    }

    SignupModel.findOne({email:email}).then((exist)=> {
        if(exist) {
            return res.status(400).send("User Already Exist")
        }
        else {
            if (password==cpassword) {
                bcrypt.hash(password,10).then((hashpassword)=> {
                    SignupModel.create({
                        email:email,
                        password:hashpassword
                    }).then((data)=> {
                        res.status(200).send("User Successfully Created")
                    })
                })
            }
            else {
                return res.status(400).send("Password Mismatch")
            }
        }
    })
});
//login server
server.post("/login", (req, res)=> {
    let { email, password}=req.body

    if (!email || !password) {
        return res.status(400).send("Please Fill Your Login Details")
    }

    SignupModel.findOne({email:email}).then((exist)=>{
    
        if (exist) {
            bcrypt.compare(password,exist.password).then((check)=> {
                if (check){
                    const token = jwt.sign(exist.email , process.env.SECRET_KEY)
                    res.status(200).send(token)
                }else {
                    return res.status(400).send("Invalid User Credentials")
                }
            })
        }else {
            return res.status(400).send("User Does Not Exist")
        }
    })
});