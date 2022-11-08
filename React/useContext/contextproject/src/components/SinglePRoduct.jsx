import React from 'react'
import {Cartstate} from "../Context"

const SinglePRoduct = ({prod,key}) => {
  const {cart,setCart}=Cartstate()
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc" >
        <span>{prod.name}</span>
        <span>{prod.price.toFixed()}</span>
      </div>
      {cart.includes(prod)?(
        <button className="add"
        onClick={()=>{
          setCart(cart.filter((c)=>c.id!==prod.id));
        }}
         >Remove from cart</button>
      ):(
        <button className="add" onClick={()=>{setCart([...cart,prod])}}>Add to cart</button>
      )}
    </div>
  )
}

export default SinglePRoduct
