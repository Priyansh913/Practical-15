import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id="navbar">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/fetchdata" >Display Data</NavLink>
        <NavLink to="/submit" >Add Data</NavLink>
    </div>
  )
}
