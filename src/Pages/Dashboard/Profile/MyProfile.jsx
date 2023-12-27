import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyProfile = () => {
    const {user, logOut } = useContext(AuthContext);
    return (
        <div >
            
                  <h2 className='text-3xl text-gray-600 py-14'>Profile</h2>
                  <div className='w-[40rem] py-4 bg-slate-100 h-[20rem] px-8 py-text-center border border-blue-400 rounded-2xl'>

                    <div className='py-2'>
                        <div className='flex justify-center'><img className='w-44 h-54 rounded-full border' src={user.photoURL} alt="" /></div>
                        <p className='text-md text-center py-3 font-bold'>Name:{user.displayName}</p>
                        <p className='text-md text-center font-bold'>Email:{user.email}</p>
                    </div>
                  </div>
        </div>
    );
};

export default MyProfile;