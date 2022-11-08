const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    product_name: String,
    product_type: String,
    available_quantity: Number,
    product_id:String,
    product_price:Number
});

const inventory_model = mongoose.model("items", inventorySchema);

module.exports = inventory_model;