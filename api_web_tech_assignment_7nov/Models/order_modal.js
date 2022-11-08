const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer_id: String,
    product_id: String,
    product_name: String,
    order_quantity: Number
});

const order_model = mongoose.model("orders", orderSchema);

module.exports = order_model;