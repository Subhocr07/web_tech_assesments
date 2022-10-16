const orderModal = require("../models/orderModel")
const inventoryModal = require("../models/inventoryModel")
const express = require("express")
const router = express.Router()

router.post("/add", (req, res) => {
    inventoryModal.find({ inventory_id: req.body.inventory_id }).then((data) => {
        if (data.length) {
            const available = parseInt(data[0].available_quantity)
            if (available > parseInt(req.body.quantity)) {
                orderModal.create({
                    user_id: req.body.user_id,
                    inventory_id: req.body.inventory_id,
                    item_name: req.body.item_name,
                    quantity: req.body.quantity
                }).then(() => {
                    const setQuantity = available - parseInt(req.body.quantity)
                    inventoryModal.updateOne({ inventory_id: req.body.inventory_id }, { $set: { available_quantity: setQuantity } }).then((data) => {
                        res.status(200).send(`Order of ${ req.body.quantity} ${req.body.item_name} Placed Successfully`)
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
})

router.get("/details", (req, res) => {
    orderModal.find().then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err.message)
    })
})

module.exports = router
