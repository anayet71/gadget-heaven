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
        loader: () => fetch('/gadgetHeaven.json ')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
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
