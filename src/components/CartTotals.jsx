import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../constants'



const CartTotals = () => {

  const {cartTotal, shipping , tax , orderTotal} = useSelector(store=> store.cart)
  const store = useSelector(store=> store.cart)
  

  return (
    <div className='card bg-base-200 ' >
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 ">
          <span>SubTotal</span>
          <span className="font-medium" >{formatPrice(cartTotal)}  </span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 ">
          <span>Shipping</span>
          <span className="font-medium" >{formatPrice(shipping)}  </span>
        </p>
        {/* tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2 ">
          <span>Tax</span>
          <span className="font-medium" >{formatPrice(tax)}  </span>
        </p>
        {/* orderTotal */}
        <p className="flex justify-between text-sm mt-4  pb-2 ">
          <span>Total</span>
          <span className="font-medium" >{formatPrice(orderTotal)}  </span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals