import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
let auth = useAuth();
    return (
    <Route
      {...rest}
      render={() => auth
        ? children
        : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;