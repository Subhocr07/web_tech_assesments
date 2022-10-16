const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({ 
    user_id:{
        type: String,
        required: true
    },
    user_name:{
        type:String, 
        required:true,
    }, 
    email:{
        type:String, 
        required:true,
        unique:true
    }
});

const userModel=mongoose.model("user",userSchema);
module.exports = userModel;