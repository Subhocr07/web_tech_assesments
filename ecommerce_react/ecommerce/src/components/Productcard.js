import React from 'react'

const Productcard = (props) => {

  return (
    <>
    
    <div className='post-card'>
        <img src={props.item.image} alt={props.item.title}/>
        <h6>{props.item.title}</h6>
    </div>
    </>
  )
}

export default Productcard