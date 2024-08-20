import toast from "react-hot-toast";
import { redirect, useLoaderData } from "react-router";
import { axiosInstance } from "../axiosInstance";
import { ComplexPagination, OrdersList ,SectionTitle } from "../components";


export const loader = (store) => async ({request}) => {
  const user = store.getState().user.user;
  if (!user) {
    toast.success("User Doesnt Exist Please Login")
     return redirect("/login");
  }

  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

  try {
    const response = await axiosInstance.get("/orders", {params,headers:{
      Authorization: `Bearer ${user.token}`
    }})

    console.log(response.data);
    

    return {orders:response.data.data , meta:response.data.meta}
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "There was an error placing your order"
    toast.error(errorMessage)
    if(error.response.status === 401 || 403) return redirect("/login")
      return null;
  }

 
};

const Orders = () => {

  const {meta} = useLoaderData()
  if(meta.pagination.total < 1){
    return <SectionTitle text={"Please Make an Order"} />
  }
  return (
    <>
    <SectionTitle text={"Your Orders"} />
    <OrdersList/>
    <ComplexPagination  />
    </>
  )
}

export default Orders