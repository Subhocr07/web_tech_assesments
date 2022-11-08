import React,{useEffect,useState} from 'react'
import { Cartstate } from  '../Context'
import SingleProduct from "./SinglePRoduct.jsx"
const Cart = () => {
  const {cart}=Cartstate()
  const [total,setTotal]=useState()
  useEffect(()=>{
    let add=cart.reduce((acc,curr)=>acc+(curr.price),0)
    setTotal(add.toFixed())
  },[cart])
  return (
    <div>
      <span>My Cart</span>
      <br />
      <span>Total:{total}</span>
      <div className="productContainer" >
        {cart.map((prod)=>{
          return(
            <SingleProduct prod={prod} key={prod.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Cart
