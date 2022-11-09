import React from 'react'
import { StoreState } from '../context/Context'

const Home = () => {
  const {products}=StoreState()
  console.log(products)
  return (
    <div className="product">
      {products?.map((item)=>{
        return(
          <span>{item.title}</span>
        )
        })}
    </div>
  )
}

export default Home
