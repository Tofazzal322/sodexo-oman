import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {

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