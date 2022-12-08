import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import "./style/singleProduct.css";
import { Cartstate } from "../context/Context";

const Singleproduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = Cartstate();
  console.log(Cartstate)
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>price:{product.price.toFixed(0)}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.rating.rate} />
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button 
            onClick={() =>{
              dispatch({
                type:"REMOVE_FROM_CART",
                payload:product
              })
            }}
            variant="danger">Remove from cart</Button>
          ) : (
            <Button 
            onClick={() =>{
              dispatch({
                type:"ADD_TO_CART",
                payload:product
              })
            }}
            variant="primary">Add to cart</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Singleproduct;
