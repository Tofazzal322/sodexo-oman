import React from 'react';
import { Navigate, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
const AdminRoute = () => {
const  {user} = useAuth();
    
    return (
         user.email ? children : <Navigate to="/login" />
    );
};

export default AdminRoute;