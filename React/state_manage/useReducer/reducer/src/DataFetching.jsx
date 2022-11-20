import React from "react";
import reducer  from "./Reducer";
import { useReducer, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const initialState ={ 
    loading:true,
    error:"",
    post:{}
}
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data});
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  console.log((state));
  return (
    <div>
      <h1>Loading</h1>
      {
        state.post.map((ele)=>{
          return (
            <h5 key={ele.id} >{ele.title}</h5>
          )
        })
      }
      
    </div>
  );
};

export default DataFetching;
