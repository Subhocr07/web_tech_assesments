const express=require("express");
require('dotenv').config();
const jwt=require("jsonwebtoken");
const mongoose=require('mongoose');
const server = express();
const bcrypt = require("bcryptjs")
const cors = require("cors");
const multer=require('multer');
const upload =multer({dest: "../uploads"})

const signupModal=require("./models/userModel");
const productModel =require("./models/productModel")
server.use(cors())


//Imported routes
const productRoutes = require("./routes/productRoute");
server.use("/product",productRoutes);


//server listen
const PORT=process.env.PORT ||3032;

server.listen(PORT,(err)=>{
    if(!err) {
        console.log(`app started at port ${PORT}`)
    }else{
        console.log(err)
    }
    
})

//body parser

server.use(express.json());
server.use(express.urlencoded({extended: false}));
//database connection

mongoose.connect("mongodb+srv://Subho:2022@socialmedia.s3obl.mongodb.net/maxlense",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(!err) {
        console.log(`server connected at db`)
    }else{
        console.log(err)
    }
});

//get route


server.post("/user/signup",(req,res)=> {
    let {email, password, cpassword}=req.body

    if (!email || !password || !cpassword) {
        return res.status(400).send('Please Fill the Field')
    }

    signupModal.findOne({email:email}).then((user)=> {
        if(user) {
            return res.status(401).send("User Already user")
        }
        else {
            if (password==cpassword) {
                bcrypt.hash(password,10).then((hashpassword)=> {
                    signupModal.create({
                        email:email,
                        password:hashpassword,
                        username:Math.random().toString()
                    }).then((data)=> {
                        res.status(200).send("User Successfully Created")
                    })
                })
            }
            else {
                return res.status(402).send("Password Mismatch")
            }
        }
    })
})

server.post("/user/login", (req, res)=> {
    let { email, password}=req.body

    if (!email || !password) {
        return res.status(400).send("Please Fill Your Login Details")
    }

    signupModal.findOne({email:email}).then((user)=>{
        if (user) {
            bcrypt.compare(password,user.password).then((check)=> {
                if (check){
                    const token = jwt.sign(user.email , process.env.SECRET_KEY);
                    const{_id,email}=user;
                    res.status(200).send(token)
                }else {
                    return res.status(400).send("Invalid User Credentials")
                }
            })
        }else {
            return res.status(400).send("User Does Not user")
        }
    })
});