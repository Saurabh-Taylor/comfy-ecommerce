import React from 'react'
import { Link , useLoaderData } from 'react-router-dom'
import { formatPrice } from '../constants';


const ProductsList = () => {
    const {products} = useLoaderData()

  return (
    <div className='mt-12 grid gap-y-8' >
        {products.map((product)=>{
            const {title , price , image , company} = product.attributes
            return <Link className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group' to={`/products/${product.id}`} key={product.id}>
                    <img src={image}  alt={title} className='rounded-lg sm:h-32 sm:w-32 hover:scale-105 transition duration-300 h-24 md:h-45 w-full object-cover ' />

                <div className="ml-0 sm:ml-16">
                    <h3 className='font-medium text-lg capitalize' > {title} </h3>
                    <h4 className='font-medium text-md text-info capitalize ' > {company} </h4>
                </div>
                <p className="font-medium ml-0 sm:ml-auto text-lg text-secondary"> {formatPrice(price)} </p>
            </Link>
        })}
    </div>
  )
}

export default ProductsList