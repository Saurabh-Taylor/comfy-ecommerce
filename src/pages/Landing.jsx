import axios from 'axios'
import { FeaturedProducts, Hero } from '../components'
import { axiosInstance } from '../axiosInstance'

let url  = "/products?featured=true"

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn:()=> axiosInstance(url)

}


export const loader  = (queryClient)=> async()=>{
  const response  = await queryClient.ensureQueryData(featuredProductsQuery)
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