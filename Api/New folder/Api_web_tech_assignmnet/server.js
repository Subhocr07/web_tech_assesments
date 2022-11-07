const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = process.env.PORT || 3001;
const inventoryController = require("./routes/inventory")
const customerController = require("./routes/customer")
const orderController = require("./routes/order")

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(methodOverride("_method"));

app.listen(port, (req, res) => {
    console.log(`server started at ${port}`);
});

mongoose.connect("mongodb://localhost:27017/api_web_tech_assignment7nov", (data)=>{
    console.log("Database is connected successfully")
}, (err)=>{
    console.log(err);
})

app.get("/", (req, res)=>{
    res.send("Api web tech assignment")
})

app.use("/inventory", inventoryController)
app.use("/user", customerController)
app.use("/order", orderController)