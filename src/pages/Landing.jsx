import axios from 'axios'
import { FeaturedProducts, Hero } from '../components'
import { axiosInstance } from '../axiosInstance'


let getFeaturedProduct  = "/products?featured=true"
export const loader  = async()=>{
  const response  = await axiosInstance(getFeaturedProduct)
  const products = response.data.data
  return {products}
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  )
}

export default Landing