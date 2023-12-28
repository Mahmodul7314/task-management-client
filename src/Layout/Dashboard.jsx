import React from 'react';
import { CgProfile } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { FaPenSquare } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import TaskOverview from '../Pages/Dashboard/TaskOverview/TaskOverview';
import CreateTask from '../Pages/Dashboard/CreateTask/CreateTask';
import ViewTask from '../Pages/Dashboard/ViewTask/ViewTask';
import MyProfile from '../Pages/Dashboard/Profile/MyProfile';
import { FaEye, FaTasks } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <>
<div className='bg-slate-100'>
<h2 className='text-4xl text-gray-500flex justify-center text-center py-8 border-b-2 px-20 border-gray-400 '>Dashboard</h2>
<div className='bg-slate-100 lg:flex grid md:grid-cols-2 grid-cols-1 lg:justify-around py-4 '>

<div className="lg:w-64 md:w-64 w-full  min-h-screen block bg-white">
  <ul className="space-y-8 pt-10">
       <li >
          
           <NavLink to="/dashboard/taskoverview" className="flex items-center text-lg px-8"><BiTask></BiTask>Task Overview</NavLink>
        </li>
       <li>
          
           <NavLink to="/dashboard/createtask" className="flex items-center text-lg px-8"><FaPenSquare></FaPenSquare>Create Task</NavLink>
        </li>
       <li>
          
           <NavLink to="/dashboard/viewtask" className="flex items-center text-lg px-8"><CiViewList></CiViewList>All Task</NavLink>
        </li>
       <li>
          
           <NavLink to="/dashboard/myprofile" className="flex items-center text-lg px-8"><CgProfile></CgProfile>Profile</NavLink>
        </li>
        </ul>
</div>
<div className="flex-1 md:w-full px-8 bg-slate-100">
    <Outlet></Outlet>
</div>
</div>
</div>


        </>
       
    );
};

export default Dashboard;