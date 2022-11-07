import React,{createContext,useState} from "react";
import './App.css';
import Child from './Child';
export const globalInfo=createContext()
function App() {
  const [color,setColor]=useState("green")
  const [monday,setMonday]=useState(true)
  const getDay=(item)=>{setDay(item);}
  const [day,setDay]=useState("Monday")
  return (
    <globalInfo.Provider value={{appColor:color,getDay:getDay}}>
    <div className="App">
      App Components {day}
      <Child/>
    </div>
    </globalInfo.Provider>
  );
}

export default App;
