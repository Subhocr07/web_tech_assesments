const express = require("express");
const order_model = require("../Models/order_modal");
const inventory_model = require("../Models/inventory_modal");
const user_model=require("../Models/customer_modal")
const balanceCheck=require("../middlewares/balanceCheck")
const router = express.Router();

router.post("/", balanceCheck,(req, res)=> {
    inventory_model.find({ product_id: req.body.product_id }).then((data) => {
        if (data.length) {
            const available = data[0].available_quantity

            if (available > req.body.order_quantity) {
                order_model.create({
                    customer_id: req.body.customer_id,
                    product_id: req.body.product_id,
                    product_name: req.body.product_name,
                    order_quantity: req.body.order_quantity
                }).then(() => {
                    const setQuantity = available - req.body.order_quantity
                    inventory_model.updateOne({ inventory_id: req.body.inventory_id }, { $set: { available_quantity: setQuantity } }).then(() => {
                        res.status(200).send("Order Placed Successfully")
                    }).catch((err) => {
                        res.status(400).send(err.message)
                    })
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
            } else {
                res.status(400).send("Given quantity greater than the available quantity")
            }
        } else {
            res.status(400).send("No such Inventory")
        }
    }).catch((err) => {
        res.status(400).send(err.message)
    })
});

router.get("/viewOrder", (req, res)=>{
    order_model.find().then((data)=>{
        res.status(200).send({data: data});
    })
})
module.exports = router;