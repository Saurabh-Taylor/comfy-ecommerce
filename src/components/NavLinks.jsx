import React from 'react'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
        {navLinks?.map((link)=>{
            const {id , text ,url } = link
            return(
                <li key={id} >
                    <NavLink className={"capitalize"} to={url} > {text} </NavLink>
                </li>
            )

        })}
    </>
  )
}

export default NavLinks