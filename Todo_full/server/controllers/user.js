import usersModel from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const userRegister = async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body)
    try{
        const user = await usersModel.findOne({email:email});
        if(user){
            return res.json({message:"User already exist"});
        }
        const hashPasword = await bcrypt.hash(password,12);
        try {
            const newUser = new usersModel({
                ...req.body,
                password:hashPasword
            })
            await newUser.save();
            res.status(201).json(newUser);;
        } catch (error) {
            console.log(error)
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

export const userLogin = async(req,res)=>{
    console.log("hi");
    const {email,password} = req.body;
    try{
        const user = await usersModel.findOne({email: email});
        if(!user){
            return res.json({ message: "User not exists" });
        }
        const oldPassword = user.password;
        const correctPassword = await bcrypt.compare(password,oldPassword);
        if(!correctPassword){
            return res.json({ message: "Invalid credentials" });
        }
        user.password = undefined;
        const token = jwt.sign({id:user._id,email:user.email},process.env.SECRET);
        res.status(200).json({token:token,result:user});
    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}