import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='relative'>
            <div className='relative'>
                <img className='w-full h-[100vh]  opacity-70 shadow-lg shadow-gray-800  relative' src="https://i.ibb.co/MBfrfTg/photo.jpg" alt="" />
            </div>
            <div className='flex justify-center items-center'>
            <div className='absolute -mt-[36rem] text- bg-green-100 px-12 py-10 shadow-2xl'>
                <h3 className='text-4xl  py-6 font-extrabold '>Welcome to Your Task Management Platform</h3>
                <p className='text-lg  flex justify-center font-extrabold'>A platform to organize your tasks</p>
               <div className='flex justify-center py-8 font-bold text-lg'><NavLink to="/signin" className='text-black btn w-40 h-12 rounded-md bg-yellow-500' >Explore Now</NavLink></div> 
            </div>
 
            </div>
          
        </header>
    );
};

export default Header;
