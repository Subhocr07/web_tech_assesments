import React, { useState } from 'react'
import {Form,Button} from "react-bootstrap"
import Rating from './Rating'
import "./style/Filter.css"
const Filter = () => {
  const [rate,setRate]=useState(2)
  return (
    <div className="filter" >
      <span className="title" >Filter Products</span>
      <span>
        <Form.Check 
        inline
        label="Ascending"
        name="Group1"
        type="radio"
        id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check 
        inline
        label="Descending"
        name="Group1"
        type="radio"
        id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check 
        inline
        label="Include out of stock"
        name="Group1"
        type="checkbox"
        id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check 
        inline
        label="Fast Delivery only" 
        name="Group1"
        type="checkbox"
        id={`inline-4`}
        />
      </span>
      <span>
        <label style={{paddingRight: 10}}>Rating</label>
        <Rating 
        rating={rate} 
        onClick={(i) =>setRate(i+1)}
        style={{cursor:"pointer"}}/>
      </span>
      
      <Button variant="light" >Clear Filters</Button>
    </div>
  )
}

export default Filter
