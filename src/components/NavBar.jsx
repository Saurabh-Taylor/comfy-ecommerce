
import { BsCart3 , BsMoonFill , BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Navlinks } from "./index";
import { useEffect, useState } from "react";


const themes ={
    winter:"winter",
    dracula:"dracula"
}

const getThemeFromLocalStorage = ()=>{
        return localStorage.getItem("theme") || themes.winter
    }

const Navbar = () => {
    
    const [theme, setTheme] = useState(getThemeFromLocalStorage())
    const handleTheme = ()=>{

        const {dracula ,winter} = themes
        const getTheme  = theme === dracula ? winter : dracula
        setTheme(getTheme)
    }

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
        localStorage.setItem("theme" , theme)
    } ,[theme])

    
  return (
    <nav  className="bg-base-200 ">
        <div className="navbar align-element">
            <div className="navbar-start">
                {/* Title */}
                <NavLink to="/" className={"hidden lg:flex btn btn-primary text-3xl items-center"} >
                    C
                </NavLink>
                {/* DROPDOWN */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" >
                        <FaBarsStaggered className=" h-6 w-6" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200">
                        <Navlinks/>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal" >
                <Navlinks/>
                </ul>
            </div>
            <div className="navbar-end">
                {/* THEME SETUP */}
                <label className="swap swap-rotate">
                    <input type="checkbox" onChange={handleTheme} />
                    <BsSunFill className="swap-on h-5 w-5" />
                    <BsMoonFill className="swap-off h-5 w-5" />
                </label>
                {/* CART LINK */}
                <div className="btn btn-ghost btn-circle btn-md ml-4 " >
                   <div className="indicator" >
                    <BsCart3 className="h-6 w-6" />
                    <span className="badge badge-sm badge-primary indicator-item" >8</span>
                   </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar