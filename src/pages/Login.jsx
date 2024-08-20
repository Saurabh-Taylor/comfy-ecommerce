import React from 'react'
import { FormInput , SubmitBtn } from '../components'
import { Form ,  Link, redirect, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { axiosInstance } from '../axiosInstance'
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/userSlice'




export const action  = (store)=>  async ({request})=>{

  const formData =  await request.formData()
  const data  = Object.fromEntries(formData)

  try {
    const response = await axiosInstance.post("/auth/local" ,data)
    store.dispatch(login(response.data))
    toast.success("Logged in Successfully")
    return redirect("/")
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "please double check ur credentials"
    toast.error(errorMessage)
  }
  return null
}


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()



  const loginAsGuestUser = async()=>{
    try {
      const response  = await axiosInstance.post("/auth/local" , {identifier:"test@test.com" , password:"secret"})
      dispatch(login(response.data))
      toast.success("Welcome , Guest User")
      navigate("/")
    } catch (error) {
      toast.error("Something Went Wrong , try again")
    }
  }


  return (
    <section className='h-screen grid place-items-center '>
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-2xl border border-red-500 flex flex-col gap-y-4 '>
        <h4 className='text-center text-3xl font-bold' >Login</h4>
        <FormInput type={"email "} label={"email"} name={"identifier"}   />
        <FormInput type={"password "} label={"password"} name={"password"}  />
        <div className='mt-4' >
          <SubmitBtn   text={"Login"} />
        </div>
        <button onClick={loginAsGuestUser} type='button' className='btn btn-secondary btn-block' >Guest User</button>
          <p className='text-center' >Not a Member Yet? <Link to={"/register"} className='ml-2 link link-hover link-primary capitalize' > register </Link> </p>
      </Form>
    </section>
  )
}

export default Login