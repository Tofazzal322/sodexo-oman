import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return user.email ? children : <Navigate to="/login" />;
};

export default AdminRoute;
