import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from "../redux/features/userSlice";
import { clearCart } from '../redux/features/cartSlice';


const Header = () => {

  const navigate  = useNavigate()
  const dispatch  = useDispatch()
  const user = useSelector(store=> store.user.user)

  const handleLogout = ()=>{
    dispatch(logout())
    dispatch(clearCart())
    navigate('/')
  }
  

  return (
    <header className='bg-neutral py-2 text-neutral-content' >
        <div className='align-element flex justify-center sm:justify-end' >
          {user?( <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'   > Hello , {user.username} </p>
            <button onClick={handleLogout} className='btn btn-xs btn-outline btn-primary' > Logout </button>
          </div> ):(
            // {/* USER */}
            // {/* Links */}
            <div className="flex gap-x-6 justify-center items-center">
                <Link to={"/login"} className='link link-hover text-xs sm:text-sm hover:text-orange-400' >Sign In/Guest</Link>
                <Link to={"/register"} className='link link-hover text-xs sm:text-sm hover:text-orange-400 ' >Create Account</Link>
            </div>
          )  }
            
        </div>
    </header>
  )
}

export default Header