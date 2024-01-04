import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                errorElement:<ErrorPage></ErrorPage>
            }
        ]
    }
])