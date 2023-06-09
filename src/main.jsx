import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Main from './layout/Main'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import AuthProviders from './Components/Providers/AuthProviders'
import Order from './Components/Order'
import PrivateRoute from './Components/PrivetRoute/PrivateRoute'
import Profile from './Components/Providers/Profile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: '/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
