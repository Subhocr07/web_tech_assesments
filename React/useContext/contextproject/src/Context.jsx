import React,{createContext,useState,useEffect,useContext} from 'react'
const Cart=createContext()
const Context = ({children}) => {
    const [cart,setCart]=useState([])
    const [product,setProduct]=useState()
    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(json=>setProduct(json))
   },[])
  return (
    <Cart.Provider value={{cart,setCart,product}}>
       {children}
    </Cart.Provider>
  )
}
export const Cartstate=()=>{return useContext(Cart)}

export default Context
