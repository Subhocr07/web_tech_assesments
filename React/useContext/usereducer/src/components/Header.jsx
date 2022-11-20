import React from 'react'
import {Container,
    Navbar,
    FormControl,
    Dropdown,
    Nav,
    Badge} from 'react-bootstrap'
import {FiShoppingCart} from "react-icons/fi"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}} >
      <Container>
        <Navbar.Brand>
            <NavLink to="/cart" >Shopping cart</NavLink>
        </Navbar.Brand>
        <Navbar.Text>
            <FormControl style={{width:500}} 
            placeholder="search a product" 
            className="m-auto"
            />
        </Navbar.Text>
        <Nav>
        <Dropdown alignright="true" >
      <Dropdown.Toggle variant="success" >
       <FiShoppingCart color="white"
       fontSize="25px"
        />
        <Badge color="white" >(10)</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth:370}} >
        <span style={{padding:10}} >Cart is Empty</span>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
