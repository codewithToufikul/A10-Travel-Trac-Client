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
import AutthProvider from './AuthProvider/AutthProvider';
import MySpotList from './Pages/MySpotList/MySpotList';
import SpotDetails from './Pages/SpotDetails/SpotDetails';
import UpdateSpot from './Pages/UpdateSpot/UpdateSpot';


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
        element: <AllSpot></AllSpot>,
        loader: () => fetch('http://localhost:5000/spots'),
      },
      {
        path: "addspot",
        element: <AddSpot>

        </AddSpot>
      },
      {
        path: "/mylist",
        element: <MySpotList></MySpotList>,
        loader: () => fetch('http://localhost:5000/spots'),
      },
      {
        path: "spotdetails",
        element: <SpotDetails></SpotDetails>
      },
      {
        path: "/updatespot/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutthProvider>
    <RouterProvider router={router} />
    </AutthProvider>
  </React.StrictMode>,
)
