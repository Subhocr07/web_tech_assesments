const mongoose = require("mongoose"),Schema = mongoose.Schema

const signupSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    }

},{timestamps:true},);
const signupModal = mongoose.model("Usersignup", signupSchema);
module.exports = signupModal;