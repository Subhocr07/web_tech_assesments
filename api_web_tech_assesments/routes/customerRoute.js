const customerModal = require("../models/userModel")
const express = require("express")
const router = express.Router()


router.post("/add", (req, res) => {
    customerModal.find({ email: req.body.email }).then((data) => {
        if (data.length) {
            res.status(400).send("User Exists,Please try with different email")
        } else {
            customerModal.create({
                user_id: req.body.user_id,
                user_name: req.body.user_name,
                email: req.body.email
            }).then((user)=>{
                res.status(400).send(`User added successfully ${user}`)
            }).catch((err) => {
                res.status(400).send(err.message)
            })
        }
    }).catch((err) => {
        res.status(400).send(err.message)
    })
})

router.get("/details",(req,res)=>{
    customerModal.find().then((data)=>{
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err.message)
    })
})



module.exports=router