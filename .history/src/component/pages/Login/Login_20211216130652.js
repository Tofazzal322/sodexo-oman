// import { Button } from "bootstrap";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hook/useAuth";
import Button from "react-bootstrap/Button";
// import useFirebase from "../../../hook/useFirebase";
import useAuth from "../../../hook/useAuth";
// import { useForm } from "react-hook-form";

const Login = () => {
  // const { register, handleSubmit } = useForm();
  const [loginData, setLoginData] = useState({});
  const { signInWithGoogle, loginUser, isLoading, authError, user } = useAuth();

  const location = useLocation();
  const navigation = useNavigate();

  //////////////////////  Login With User /////////////////////
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  ///////////////////////////////////////////

  ////////////////  Login with user ///////////////////
  const handleLoginSubmit = (e) => {
    const email = loginData?.email;
    const password = loginData?.password;

    loginUser(email, password, location, navigation);
    e.preventDefault();
  };
  ////////////////////////////////////////////////

  /////////////  Login with Google //////////////////
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigation);
  };
  ////////////////////////////////////////////////////////
  // const onSubmit = (data) => {
  //   const email = data?.email;
  //   const password = data?.password;

  //   loginUser(email, password, location, navigation);
  // };

  return (
    <div className="container">
      <h2 className="text-center"> Please Login</h2>
      
    </div>
  );
};

export default Login;
