import React from 'react'
import {Form,Button} from "react-bootstrap"
import "./style/Filter.css"
const Filter = () => {
  return (
    <div className="filter" >
      <span className="title" >Filter Products</span>
      <span>
        <Form.Check 
        inline
        label="Ascending"
        name="Group1"
        type="checkbox"
        id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check 
        inline
        label="Descending"
        name="Group2"
        type="checkbox"
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
      
      <Button variant="light" >Clear Filters</Button>
    </div>
  )
}

export default Filter
