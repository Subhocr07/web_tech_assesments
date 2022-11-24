import React from 'react'
import {Container,Navbar,FormControl,Nav,Badge} from "react-bootstrap" 
import Dropdown from 'react-bootstrap/Dropdown';
import {RiShoppingCart2Fill} from 'react-icons/ri'
import {Link} from "react-router-dom"


const Header = () => {
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
        <Badge>{10}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/cart" >Cart</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
