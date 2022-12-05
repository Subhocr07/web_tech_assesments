import React from 'react'
import {Card} from "react-bootstrap"

const Singleproduct = ({product}) => {
  return (
    <div className="products" >
      <Card>
        <Card.Img variant='top' src={product.img} />
      </Card>
    </div>
  )
}

export default Singleproduct
