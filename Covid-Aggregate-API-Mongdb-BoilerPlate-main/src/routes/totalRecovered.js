const express = require("express");
const router = express.Router();
const dataInfo=require("../schema");


router.get("/totalrecoverd",(req,res)=>{
    dataInfo.find(
    ).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
    //  db.covidtallies.aggregate([{$group:{_id:"$recoverd",totalrecoverd:{$sum:"$recovered"}}}])
    // { "_id" : null, "totalrecoverd" : 8427016 }
})

module.exports =router;