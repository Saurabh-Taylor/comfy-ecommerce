import React, { useState } from 'react'
import {ProductsGrid , ProductsList} from './index'
import { useLoaderData } from 'react-router'
import { BsFile, BsFillGridFill, BsList } from 'react-icons/bs'



const ProductContainer = () => {

  const {meta} = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveLayouts = (pattern)=>{
    return `text-xl btn btn-circle btn-sm ${pattern === layout? "btn-primary text-primary-content":"btn-ghost text-based-content"}`
  }

  return (
    <>
      {/* HEADER */}
      <div className="flex  items-center justify-between mt-8 border-b pb-2 border-base-300">
        <h4 className='font-medium text-lg' >
          {totalProducts} Product{totalProducts>1 && "s"}
        </h4>
        <div className='flex gap-x-2' >
          <button type='button' onClick={()=> setLayout('grid')} className={setActiveLayouts('grid')} > 
            <BsFillGridFill/>
          </button>
          <button type='button' onClick={()=> setLayout('list')} className={setActiveLayouts('list')} > 
            <BsList/>
          </button>
        </div>
      </div>
     {/* PRODUCTS */}
     {
     totalProducts === 0 ? (<h5 className='text-2xl  mt-16' >
       Sorry No Products As of Your Search
    </h5>):(layout ==="grid"?
      (<ProductsGrid/>
      ):(
      <ProductsList/>
      ))
     }
    </>
  )
}

export default ProductContainer