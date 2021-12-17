import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const AdminRoute = ({ children, ...rest }) => {
   const { user } = useAuth();
  let location = useLocation();
  
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;