import toast from 'react-hot-toast'
import { axiosInstance } from '../axiosInstance'
import { FormInput , SubmitBtn } from '../components'
import { Form ,  Link, redirect } from 'react-router-dom'

export const action  = async ({request})=>{
  const formData =  await request.formData()
  const data  = Object.fromEntries(formData)
  console.log(data);

  try {
    const response = await axiosInstance.post("/auth/local/register" ,data)
    toast.success("Account created Successfully")
    return redirect("/login")
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "please double check ur credentials"
    toast.error(errorMessage)
  }
  return null
}


const Register = () => {
  return (
    <section className='h-screen grid place-items-center '>
      <Form method='post' className='card w-96 p-8 bg-base-100 shadow-2xl border border-red-500 flex flex-col gap-y-4 '>
        <h4 className='text-center text-3xl font-bold' >Register</h4>
        <FormInput type={"text "} label={"username"} name={"username"} defaultValue={"saurabh"} />
        <FormInput type={"email "} label={"email"} name={"email"} defaultValue={"tailorsaurabh1@gmail.com"} />
        <FormInput type={"password "} label={"password"} name={"password"} defaultValue={"Srb567890@"}  />
        <div className='mt-4' >
          <SubmitBtn   text={"Register"} />
        </div>
        <p className='text-center' >Already a Member? <Link to={"/login"} className='ml-2 link link-hover link-primary capitalize' > login </Link> </p>
      </Form>
    </section>
  )
}

export default Register