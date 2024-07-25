import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import { HomeLayout , About ,Cart ,Checkout ,Error ,Landing ,Login ,Orders ,Products ,Register,SingleProduct } from "./pages"
import { ErrorElement } from "./components"





import { loader as LandingLoader } from "./pages/Landing"
import { loader as SingleProductLoader } from "./pages/SingleProduct"
import { loader as ProductsLoader } from "./pages/Products"



const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:LandingLoader
      },
      {
        path:"products",
        element:<Products/>,
        rrorElement:<ErrorElement/>,
        loader:ProductsLoader
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:SingleProductLoader
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
