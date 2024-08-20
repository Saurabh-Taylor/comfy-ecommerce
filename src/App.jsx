import { createBrowserRouter, RouterProvider  } from "react-router-dom"
import { HomeLayout , About ,Cart ,Checkout ,Error ,Landing ,Login ,Orders ,Products ,Register,SingleProduct } from "./pages"
import { ErrorElement } from "./components"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});



//loader
import { loader as LandingLoader } from "./pages/Landing"
import { loader as SingleProductLoader } from "./pages/SingleProduct"
import { loader as ProductsLoader } from "./pages/Products"
import { loader as CheckoutLoader } from "./pages/Checkout"
import { loader as OrdersListLoader } from "./pages/Orders"


//actions
import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { action as checkoutAction } from "./components/CheckoutForm"

import store from "./redux/store";

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
        loader:LandingLoader(queryClient)
      },
      {
        path:"products",
        element:<Products/>,
        rrorElement:<ErrorElement/>,
        loader:ProductsLoader(queryClient)
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:SingleProductLoader(queryClient)
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
        element:<Orders/>,
        loader:OrdersListLoader(store, queryClient)
      },
      {
        path:"checkout",
        element:<Checkout/>,
        loader:CheckoutLoader(store),
        action:checkoutAction(store , queryClient)
      }
    ]
  },
  {
    path: "/login",
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store)
  },
  {
    path: "/register",
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction
  }
])
function App() {

  return (
    <QueryClientProvider client={queryClient} >

      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
