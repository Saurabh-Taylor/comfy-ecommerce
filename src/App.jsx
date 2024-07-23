import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import { HomeLayout , About ,Cart ,Checkout ,Error ,Landing ,Login ,Orders ,Products ,Register,SingleProduct } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
      },
      {
        path:"about",
        element:<About/>
        
      },
      {
        path:"cart",
        element:<Cart/>

      },
      {
        path:"orders",
        element:<Orders/>
      },
      {
        path:"checkout",
        element:<Checkout/>
      }
    ]
  },
  {
    path: "/login",
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path: "/register",
    element:<Register/>,
    errorElement:<Error/>
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
