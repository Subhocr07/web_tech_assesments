const express = require("express");
const inventory_model = require("../Models/inventory_modal");
const order_modal = require("../Models/order_modal")
const router = express.Router();


router.post("/addItem", (req, res)=> {
    inventory_model.find({ inventory_id: req.body.inventory_id }).then((data) => {
        if (data.length) {
            const quantity=(data[0].available_quantity)+(req.body.available_quantity)
            inventory_model.updateOne({ inventory_id: req.body.inventory_id },{$set: {available_quantity:quantity}}).then((data)=>{
                res.status(200).send("Inventory Added Successfully")
            }).catch((err) => {
                res.status(400).send(err.message)
            })
        } else {
            inventory_model.create({
            product_name:req.body.product_name,
            product_type:req.body.product_type,
            available_quantity:req.body.available_quantity,
            product_id:req.body.product_id,
            product_price:req.body.product_price
            }).then((data)=>{
                res.status(200).send(`New Inventory added successfully ${data}`)
            }).catch((err) => {
                res.status(400).send(err.message)
            })
        }
    }).catch((err) => {
        res.status(400).send(err.message)
    })
});

router.get("/viewItem", (req, res)=>{
    inventory_model.find().then((data)=>{
        res.status(200).send({data: data});
    })
})
module.exports = router;