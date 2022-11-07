import React,{useContext} from 'react'
import {globalInfo} from "./App"
import SuperChild from './superChild';
const Child = () => {
    const {appColor}=useContext(globalInfo);
    
  return (
    <div>
      <h1 style={{color:appColor}}>child components</h1>
      <SuperChild/>
    </div> 
  )
}

export default Child
