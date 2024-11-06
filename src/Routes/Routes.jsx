import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";
import Dashboardcart from "../Components/Dashboardcart";
import Wishlist from "../Components/Wishlist";
import Reviwe from "../Components/Reviwe";
import ErrorPage from "../Pages/ErrorPage";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      errorElement:<ErrorPage />,
      children:[
        {
         path:"/",
         element: <Home />,
        
         loader: () => fetch ('../Category.json'),
         children:[
          {
            path:"/",
            element: <Products />,
            loader: () => fetch ('../Products.json'),
          },
          {
            path:"/category/:cate",
            element: <Products />,
            loader: () => fetch ('../Products.json'),
          },
         ]

        },
        {
          path:"/Dashboard",
          element: <Dashboard />,
          children:[
            {
              path:"Dasboardcart",
              element:<Dashboardcart />
            },
            {
              path:"Wishlist",
              element:<Wishlist />
            }

          ]
 
         },
        {
          path:"/Statistics",
          element: <Statistics />,
          loader: () => fetch ('../Products.json'),
 
         },
       
        {
          path:"/ProductDetails/:product_id",
          element:<ProductDetails />
        },
        {
          path:"/Reviwe",
          element: <Reviwe />,
          loader: () => fetch ('../Reviwe.json'),
         },
       
       

      ]
    },
  ]);
  export default routes;