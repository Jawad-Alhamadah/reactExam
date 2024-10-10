import React from 'react'
import Books from '../pages/Books';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleBook from '../pages/SingleBook';
import Home from "../pages/Home"
import Signup from '../pages/Signup';

import Login from '../pages/Login'
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:"/books",
        element:<Books></Books>
    },
    {
        
        path:"/books/:id/:catagory",
        element:<SingleBook></SingleBook>
    },{
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/login",
        element:<Login/>
    }
  ]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
