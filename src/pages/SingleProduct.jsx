import React, { useState } from 'react'
import { axiosInstance } from '../axiosInstance';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { formatPrice, generateAmountOptions } from '../constants.jsx';

export const loader =  async({params})=>{
  const response  = await axiosInstance(`products/${params.id}`)
  console.log(response);
  return {products:response.data.data}

}

const SingleProduct = () => {

  const {products} = useLoaderData()
  const {colors, image , title , price , description , company} = products.attributes
  const [productColor, setproductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmt  = (e)=>{
    setAmount(Number(e.target.value))
  }

  return (
   <section>
    <div className="breadcrumbs text-md">
      <ul>
        <li><Link to={"/"} > Home </Link></li>
        <li><Link to={"/products"} > Products </Link></li>
        <li><Link to={"#"} > {title} </Link></li>
      </ul>
    </div>
    {/* PRODUCT */}
    <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      {/* IMAGE */}
      <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
      {/* PRODUCT INFO */}
      <div > 
        <h1 className='capitalize text-3xl font-bold'  > {title} </h1>
        <h4 className='text-xl text-neutral-content font-bold mt-2' > {company} </h4>
        <p className='mt-3 text-xl text-warning' > {formatPrice(price)} </p>
        <p className='mt-3 text-xl' > {description} </p>
        <div>
          {/* COLORS */}
        <h3 className='text-xl font-bold'>Colors</h3>
        {colors.map((color)=>{
          return <button style={{backgroundColor:color}} key={color} className={`w-6 h-6 mr-2 badge  
            ${color === productColor &&  'border-2 border-secondary' }`} 
            onClick={()=>setproductColor(color)}></button>
        })}
        {/* AMOUNT */}
        <div className="form-control w-full max-w-xs">
          <label htmlFor='amount' className="label">
            <h4 className='capitalize text-md font-medium tracking-wider' > Amount </h4>
          </label>
          <select className='select select-accent select-bordered' value={amount} onChange={handleAmt} name="" id="amount">
           {generateAmountOptions(4)}
          </select>
          <button className='btn btn-secondary mt-8 btn-md' >Add To Bag</button>
        </div>
        {/* CART BUTTON */}
        
        
      </div>
    </div>
     
    </div>

   </section>

  )
}

export default SingleProduct