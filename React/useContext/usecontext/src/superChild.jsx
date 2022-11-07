import React,{useContext} from 'react'
import {globalInfo} from "./App.js"
import AnotherChild from "./otherChild/AnotherChild"
const SuperChild = () => {
  const {appColor,getDay}=useContext(globalInfo);
  const day="Sunday"
  return (
    <div>
      <h1 style={{color:appColor}}>Super Child</h1>
      <AnotherChild/>
      <button onClick={()=>{getDay(day)}}>Click Me</button>
    </div>
  )
}

export default SuperChild
