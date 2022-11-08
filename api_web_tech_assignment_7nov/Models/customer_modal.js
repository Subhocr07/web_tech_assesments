const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    customer_name: String,
    customer_email: {
        type:String,
        unique:true
    },
    customer_id: String,
    customer_balance:Number
});

const customer_model = mongoose.model("customer", customerSchema);

module.exports = customer_model;