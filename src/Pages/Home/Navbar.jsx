import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            console.log('user logout seuccessfully')
        })
        .cathc(()=>{
            console.log('error')
        });
    }
  
    const navOptions = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/aboutus">Aboutus</NavLink></li>
      <li><NavLink to="/articles">Articles</NavLink></li>
      <li><NavLink to="/clients">Clients</NavLink></li>

     
      {/* {
        user? <>
               <div className="flex items-center gap-6"> <span><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></span></div> 
                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
              </> :
              <>
                <li><Link to="/login">Login</Link></li>
              </>
      
      } */}
   </>
    return (
        <div>
        <>
        <div className="navbar fixed z-10 max-w-screen-xl bg-blue-400 text-gray-800 font-bold">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
                {navOptions}

            </ul>
            </div>
            <div className='flex items-center'>
            <a className=" text-xl text-gray-800"><img src ="https://i.ibb.co/bb9XsFf/tasks.png" alt="" className='w-20 h-14'/></a>
            <p className=" lg:text-xl text-lg text-white">SCC Task Management</p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

                {navOptions}

            </ul>
        </div>
        <div className="navbar-end">
        {
        user? <>
               <div className="flex items-center ga--8 lg:gap-6"> <span><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></span></div> 
                <button onClick={handleLogOut} className="btn lg:btn-warning btn-info font-normal lg:font-bold">Log Out</button>
              </> :
              <>
                <p className='btn lg:btn-warning  btn-info font-normal  lg:font-bold'><NavLink to="/signin">Login</NavLink></p>
              </>
      
      }
        </div>
        </div>
            </>
        </div>
    );
};

export default Navbar;