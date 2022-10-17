const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({ 
    item_name:{
        type:String, 
        required:true,
    }, 
    quantity:{
        type:Number,
        required:true,
    },
    user_id:{type:String},
    order_id:{type:String}
});

const orderModel=mongoose.model("order",orderSchema);
module.exports = orderModel;