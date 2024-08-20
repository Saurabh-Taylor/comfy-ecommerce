import React from 'react'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavLinks = () => {
  const user = useSelector(store=> store.user.user)
  
  return (
    <>
        {navLinks?.map((link)=>{
            const {id , text ,url } = link
            if((url === "checkout" || url ==="orders") && !user) return null
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