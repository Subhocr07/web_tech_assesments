import React,{useContext} from 'react'
import {globalInfo} from "../App"
const AnotherChild = () => {
    const {appColor}=useContext(globalInfo)
  return (
    <div>
      <h1 style={{color:appColor}}>Another child</h1>
    </div>
  )
}

export default AnotherChild
