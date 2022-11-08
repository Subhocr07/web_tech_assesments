import React from 'react'
import {NavLink} from "react-router-dom"
import "./styles.css"
import {Cartstate} from "../Context"

const Header = () => {
  const {cart}=Cartstate()
  return (
    <div>
      <span className="header" >React Context Api tutorial</span>
      <ul className="nav">
        <li className="prod">
            <NavLink to="/home" >home page</NavLink>
        </li>
        <li className="prod1" >
            <NavLink to="/cart" >Cart({cart.length})</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
