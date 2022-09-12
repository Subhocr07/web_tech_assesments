const express = require('express')
const mongoose=require("mongoose")
const app = express()
const bodyParser = require("body-parser");
const port = 8080;
const totalrecoverdController=require("./routes/totalRecovered")

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connection } = require('./connector')






app.listen(port, () => console.log(`App listening on port ${port}!`))

app.get('/get',(req,res)=>{
    res.send("Route responding")
})
app.post("/post",(req,res)=>{
    res.send("Post data ")
})
app.use("/",totalrecoverdController)