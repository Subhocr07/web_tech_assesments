import React from 'react'
import { StoreState } from '../context/Context'

const Home = () => {
  const {products}=StoreState()
  console.log(products)
  return (
    <div className="product">
      {products?.map((item)=>{
        return(
          <div key={item.id}><span>{item.title}</span></div>
        )
        })}
    </div>
  )
}

export default Home
