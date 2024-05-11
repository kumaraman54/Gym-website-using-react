import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import Membership from './components/Membership.jsx';
import Signup from './components/Signup.jsx';
import Gallery from './components/Gallery.jsx';
import Blog from './components/Blog.jsx';
import Background from './components/Background.jsx';

  const router = createBrowserRouter([
    {
      path:"",
      element:<App/>,
      children:[
        {
          path:"Membership",
          element:<Membership/>
        },
        {
          path:"Blog",
          element:<Blog/>
        },
        {
          path:"Gallery",
          element:<Gallery/>
        },
        {
          path:"Signup",
          element:<Signup/>
        },
        {
          path:"/",
          element:<Background/>
        },
        {
          path: "Signup",
          element: <Signup/>
        },
        {
          path: "Membership",
          element: <Membership/>
        }

      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
