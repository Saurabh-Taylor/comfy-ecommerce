import React from 'react'
import { useSelector } from 'react-redux'
import SingleCartItem from './SingleCartItem'



const CartItems = () => {

  const cartItems =  useSelector(store=> store?.cart?.cartItems)


  return (
    < >
      {cartItems.map((item , index)=>{
        return (
          <SingleCartItem key={index} cartItem= {item} />
        )
      })}
    </>
  )
}

export default CartItems