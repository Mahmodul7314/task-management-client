/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Dashboard from '../Layout/Dashboard';


const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className='progress w-56'></progress>
    }
    if(user){
        return <Dashboard></Dashboard>;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
       
};

export default PrivateRoute;