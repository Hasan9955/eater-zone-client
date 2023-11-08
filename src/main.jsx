import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Pages/Error';
import Root from './Pages/Root';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Register from './Pages/Register';
import Home from './Pages/Home/Home';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Router/PrivateRoute';
import AddFood from './Pages/AddFood';
import UpdateFood from './Pages/UpdateFood';
import AddedFood from './Pages/AddedFood';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import Shop from './Pages/Shop';
import Details from './Pages/Details';
import MyCart from './Pages/MyCart';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: '/addFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/updateFood/:id',
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/addedFood',
        element: <PrivateRoute><AddedFood></AddedFood></PrivateRoute>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      }
    ]
  },
]);


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
