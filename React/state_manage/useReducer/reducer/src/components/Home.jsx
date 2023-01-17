import React from 'react'
import {Cartstate} from "../context/Context"
import Filter from './Filter'
import Singleproduct from "./Singleproduct"
import "./style/Home.css"
const Home = () => {
  const {state:{post}}=Cartstate()
  console.log(post)
  return (
    <div className="home_home" >
      <Filter/>
      <div className="productContainer" >
        {
          post?.map((prod)=>{
            return (
              <Singleproduct product={prod} key={prod.id}  />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
