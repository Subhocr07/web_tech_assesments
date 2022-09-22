const mongoose = require("mongoose"),Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
    }, 
    slug:{
        type: String,
        required: true,
        unique: true,
    }, 
    price:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
        trim:true,
    },
    productImage:[
        {
            img:{
                type:String,
            }
        }
    ],
    createdBy:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    }




});
const productModal = mongoose.model("Product", productSchema);
module.exports = productModal;