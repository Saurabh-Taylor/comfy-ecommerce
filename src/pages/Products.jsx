import React from 'react'
import { Filters , PaginationContainer , ProductContainer  } from '../components'
import { axiosInstance } from '../axiosInstance'

const url ="/products"

export const loader = async({request})=>{
    const response = await axiosInstance.get(url)
    const products = response.data.data
    //meta contains the pagination , companies , categories
    const meta = response.data.meta 
    return {products , meta}
}



const Products = () => {
  return (
    <div>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </div>
  )
}

export default Products