import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllSpot from './Pages/AllSpot/AllSpot';
import AddSpot from './Pages/AddSpot/AddSpot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allspot",
        element: <AllSpot></AllSpot>
      },
      {
        path: "addspot",
        element: <AddSpot></AddSpot>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
