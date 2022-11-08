const express = require("express");
const order_model = require("../Models/order_modal");
const inventory_model = require("../Models/inventory_modal");
const user_model = require("../Models/customer_modal");

const balanceCheck = (req, res, next) => {
  user_model.find({ customer_id: req.body.customer_id }).then((customer) => {
    if (customer.length) {
      inventory_model
        .find({ product_id: req.body.product_id })
        .then((product) => {
          if (product.length) {
            const orderPrice =
              req.body.order_quantity * product[0].product_price;
            console.log(orderPrice);
            if (orderPrice < customer[0].customer_balance) {
              const newBalance = customer[0].customer_balance - orderPrice;
              console.log(newBalance);
              user_model.updateOne(
                { customer_id: req.body.customer_id },
                { $set: { customer_balance: newBalance } }
              ).then((data) => {
                console.log(data);
                next()
              })

              
            } else {
              res.send("Insufficient Balance");
            }
          }
        });
    }
  });
};
module.exports = balanceCheck;
