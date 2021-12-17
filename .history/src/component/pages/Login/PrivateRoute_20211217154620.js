import React from 'react';
import { Navigate, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
const  {user} = useAuth();
    return (
       user.email ? children : <Navigate to="/login" state={{f}} />
  );
};

export default PrivateRoute;