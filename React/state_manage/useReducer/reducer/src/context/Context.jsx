import React from 'react'
import {createContext,useReducer,useEffect,useContext} from 'react'
import axios from 'axios'
import reducer from './Reducer'
const Cart=createContext();

const Context = ({children}) => {
    const initialState ={ 
        loading:true,
        error:"",
        post:[],
        cart:[]
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            dispatch({ type: "FETCH_SUCCESS", payload: response.data});
          })
          .catch((error) => {
            dispatch({ type: "FETCH_ERROR" });
          });
      }, []);

      // console.log(state)


  return (
    <Cart.Provider value={{state,dispatch}} >
      {children}
    </Cart.Provider>
  )
}

export default Context
export const Cartstate=()=>{
    return useContext(Cart)
}
