const express = require('express');
const mongoose = require('mongoose');
const {v4 : uuidv4} = require('uuid');
const multer=require('multer');
const router=express.Router();
const slugify=require('slugify');
const jwt=require('jsonwebtoken')
//models
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

//multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads')
  },
  filename: function (req, file, cb) {
    cb(null,uuidv4() + '-' + file.originalname)
  }
})

const upload =multer({storage})





//add product route
router.post("/add",upload.array("productImage"),(req, res)=>{
  //  res.status(200).json({file:req.files,body:req.body})
  //destructure the object 

  const {name,price,description,quantity,category
    }=req.body;
    let productId=(new Date).getTime()
    const auth_id = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    let productImage=[];
    if(req.files.length>0){
      productImage=req.files.map(file=>{
          return {img:file.filename}
      })
    }


    const product=new productModel({
          name:name,
          slug:slugify(name), 
          price,
          description,
          productImage,
          quantity,
          category, 
          productId,
          createdBy:auth_id
    });

    product.save(((err, product)=>{
      if(err) return res.status(200).json({err})
      if(product){
        res.status(400).json({product})
      }
    }))



})


router.get("/all", (req, res) => {
  productModel.find().then((data) => {
      res.status(200).send(data)
  })
});


router.delete("/delete/:id", (req, res) => {
  productModel.find({ productId: req.params.id }).then((data) => {
      if (data.length) {
          productModel.deleteOne({ productId: req.params.id }).then(() => {
              res.status(200).send("Product deleted successfully")
          }).catch((err) => {
              res.status(400).send(err)
          })
      } else {
          res.status(400).send("no such product")
      }
  })
});

router.post("/edit/:id", (req, res) => {
  productModel.find({ productId: req.params.id }).then((data) => {
    console.log(data)
      if (data.length) {
          productModel.updateMany({ productId: req.params.id }, { $set: req.body }).then((data) => {
            console.log(data)
              res.status(200).send(data)
          }).catch((err) => {
              res.status(400).send(err)
          })
      } else {
          res.status(400).send("no such product")
      }
  })
});

module.exports=router