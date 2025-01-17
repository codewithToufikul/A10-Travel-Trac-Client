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
import CountrySpot from './Pages/CountrySpot/CountrySpot';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import ErrorPage from './Pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://travel-trac-server.vercel.app/spots'),
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
        loader: () => fetch('https://travel-trac-server.vercel.app/spots'),
      },
      {
        path: "addspot",
        element: <PrivetRoute><AddSpot></AddSpot></PrivetRoute>
      },
      {
        path: "/mylist",
        element: <PrivetRoute><MySpotList></MySpotList></PrivetRoute>,
        loader: () => fetch('https://travel-trac-server.vercel.app/spots'),
      },
      {
        path: "/spotdetails/:id",
        element: <PrivetRoute><SpotDetails></SpotDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://travel-trac-server.vercel.app/spots/${params.id}`)
      },
      {
        path: "/updatespot/:id",
        element: <PrivetRoute><UpdateSpot></UpdateSpot></PrivetRoute>,
        loader: ({params}) => fetch(`https://travel-trac-server.vercel.app/spots/${params.id}`)
      },
      {
        path: "/countryspot/:country_name",
        element: <CountrySpot></CountrySpot>,
        loader: ({params})=> fetch(`https://travel-trac-server.vercel.app/countrys/${params.country_name}`)
        
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
