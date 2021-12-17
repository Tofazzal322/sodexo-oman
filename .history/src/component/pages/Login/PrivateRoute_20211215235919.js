import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
const  {user} = useAuth();
    return (
       auth ? children : <Navigat to="/login" />
  );
};

export default PrivateRoute;