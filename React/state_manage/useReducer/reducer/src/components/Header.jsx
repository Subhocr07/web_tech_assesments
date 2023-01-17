import React from 'react'
import {Container,Navbar,FormControl,Nav,Badge, Button} from "react-bootstrap" 
import Dropdown from 'react-bootstrap/Dropdown';
import {RiShoppingCart2Fill} from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai';
import {Link} from "react-router-dom"
import {Cartstate} from "../context/Context"
import "./style/Header.css"


const Header = () => {
  const {state:{cart},dispatch}=Cartstate()
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}} >
      <Container>
        <Navbar.Brand>
          <Link to="/home" color="white" >Home</Link>
        </Navbar.Brand>
        <Navbar.Text className="search" >
          <FormControl
          placeholder="Search..."
          style={{width:500}}
          />
        </Navbar.Text>
        <Nav>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <RiShoppingCart2Fill color='white' fontSize="25px" />
        <Badge>{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth:370}}>
        {
          cart.length>0?(
           <>
           {
            cart.map((prod)=>{
              return(
                <span className="cartItem" key={prod.id} >
                <img 
                src={prod.image}
                className="cartImage"
                alt={prod.name}
                 />
                 <div className="cartItemDetails" >
                    <span>{prod.image}</span>
                    <span>{prod.price.toFixed(0)}</span>
                 </div>
                 <AiFillDelete 
                 fontSize="20px"
                  style={{cursor:"pointer"}}
                  onClick={()=>{
                    dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:prod
                    })
                  }}
                 />
              </span>
              )})}
              <Link to="/cart" >
              <Button style={{width:"95%",margin:"0 10px"}}>Go To Cart</Button>
              </Link>
           </>
          ):(
            <span style={{padding:30}}>Cart is Empty!</span>
          )
        }
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
