const express=require("express");
const mongoose=require("mongoose");
const orderController=require("./routes/orderRoute");
const customerController=require("./routes/customerRoute");
const inventoryController=require("./routes/inventoryRoutes");

const PORT=7000;
const MONGOURI="mongodb://localhost:27017/api_assessment"
const server=express();

//bodyParser
server.use(express.json());
server.use(express.urlencoded({extended: false}));


//server listen
server.listen(PORT,(err)=>{!err?console.log(`Server started at ${PORT}`):console.log(err)});

//DB connection
mongoose.connect(MONGOURI,(err)=>{!err?console.log(`DB connected`):console.log(err)})
//test Server
server.get("/home",(req,res)=>{
    res.send("Get route working.Api Started!!")
})

//Routes
server.use("/order",orderController)
server.use("/customer",customerController)
server.use("/inventory",inventoryController)