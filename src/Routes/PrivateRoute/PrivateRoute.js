import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            < div className='h-screen flex justify-center items-center' >
                <div className="badge badge-lg mr-2"></div>
                <div className="badge badge-md mr-2"></div>
                <div className="badge badge-sm mr-2"></div>
                <div className="badge badge-xs mr-2"></div>
            </div >
        )
    }

    if (!user) {
        return <Navigate to='/account' state={{ from: location }} replace></Navigate>
    }

    return children;

};

export default PrivateRoute;