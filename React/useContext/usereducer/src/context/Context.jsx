import React from 'react'
import {createContext,useState,useEffect,useContext} from "react"
const  Store=createContext()
const Context = ({children}) => {
  const [products,setProducts]=useState()
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  },[])
  console.log(products)
  return (
    <Store.Provider value={{products}} >
      {children}
    </Store.Provider>
  )
}
export const StoreState=()=>{return useContext(Store)}
export default Context
