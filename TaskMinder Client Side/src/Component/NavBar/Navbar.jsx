import React from 'react'
import { NavLink } from 'react-router'

export const Navbar = () => {
  return (
    <div>
        <li>Home</li>
       <NavLink to={'/signIn'}>Sign In</NavLink>
      
        <li>About</li>
    </div>
  )
}
