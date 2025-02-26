import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './component/root/Root.jsx'
import Home from './component/Home/Home.jsx'
import ErrorPage from './component/ErrorPgae/ErrorPage.jsx'
import ProductDetails from './component/ProductDetails/ProductDetails.jsx'
import Dashboard from './component/Dashboard/Dashboard.jsx'
import Cart from './component/Cart/Cart.jsx'
import Wishlist from './component/Wishlist/Wishlist.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'products/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgetHeaven.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'cart',
            element: <Cart></Cart>,
            loader: () => fetch('/gadgetHeaven.json')
            
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>,
            loader: () => fetch('/gadgetHeaven.json')
          }
          
        ]
      }

      
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
    <App />
  </StrictMode>,
)
