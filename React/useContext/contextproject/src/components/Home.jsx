import React from 'react'
import { Cartstate } from '../Context'
import SingleProduct from "./SinglePRoduct"

const Home = () => {
  const {product}=Cartstate()
  return (
    <div className="productContainer" >
      {product?.map((item)=>{
       return (
        <SingleProduct prod={item} key={item.id} />
       )
      })}
    </div>
  )
}

export default Home
