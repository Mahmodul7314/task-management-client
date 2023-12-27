
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutUS from "../Pages/AboutUs/AboutUS";
import Articles from "../Pages/Articles/Articles";
import Clients from "../Pages/Clients/Clients";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";

import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import ViewTask from "../Pages/Dashboard/ViewTask/ViewTask";
import MyProfile from "../Pages/Dashboard/Profile/MyProfile";
import TaskOverview from "../Pages/Dashboard/TaskOverview/TaskOverview";
import UpdateTask from "../Pages/Dashboard/UpdateTask/UpdateTask";


export const router = createBrowserRouter([
    {
        
     path:"/",
     element:<Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/aboutus",
            element:<AboutUS></AboutUS>
        },
        {
            path:"/articles",
            element:<Articles></Articles>
        },
        {
            path:"/clients",
            element:<Clients></Clients>
        },
        {
            path:"/signup",
            element:<Register></Register>
        },
        {
            path:"/signin",
            element:<Login></Login>
        },
 ]
},
        {//Dashboard routes-------------------------------------------------------------------
            path:"/dashboard",
            element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            children:[
              {
               path:"taskoverview",
               element:<TaskOverview></TaskOverview>
              },
              {
               path:"createtask",
               element:<CreateTask></CreateTask>},
              {
               path:"viewtask",
               element:<ViewTask></ViewTask>
              },
              {
               path:"myprofile",
               element:<MyProfile></MyProfile>
              },
              {
                path:"updatetask/:id",
                element:<UpdateTask></UpdateTask>,
             
              }
            
            
      
            ]
          }
])

export default router;