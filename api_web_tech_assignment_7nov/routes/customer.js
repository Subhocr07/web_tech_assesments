const express = require("express");
const customer_model = require("../Models/customer_modal")
const router = express.Router();

router.post("/addCustomer", (req, res)=> {
    customer_model.find({customer_email: req.body.email}).then((data)=>{
        if(data.length){
            res.send("User with email already registered")
        } else{
            customer_model.create({
                customer_name: req.body.name,
                customer_email: req.body.email,
                customer_id:req.body.customer_id,
                customer_balance:req.body.customer_balance
        }).then((data)=> {
                res.status(200).send("Customer Added")
            }).catch((err)=> {
                res.status(400).send(err)
            })
        }
    })
});

router.get("/viewCustomer", (req, res)=>{
    customer_model.find().then((data)=>{
        res.status(200).send({data: data});
    })
})
module.exports = router;