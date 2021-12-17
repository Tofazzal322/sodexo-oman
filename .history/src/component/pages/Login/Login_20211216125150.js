// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../../hook/useAuth";
import Button from "react-bootstrap/Button";
// import useFirebase from "../../../hook/useFirebase";
import useAuth from "../../../hook/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
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
    <div>
      <h2> Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName")} />
        {/* <input type="number" {...register("age")} /> */}
        <input type="submit" />
      </form>
      <Button
        className="register-toggle-btn mb-3 mt-3 w-100"
        variant="primary"
        type="submit"
      >
        Login
      </Button>

      <Button
        // variant="outline"
        className="google-btn w-100"
        onClick={handleGoogleSignIn}
      >
        Sign in with google
      </Button>

      <NavLink style={{ textDecoration: "none" }} to="/register">
        <Button
          // className="border btn btn-outline-dark fw-bold toggle-btn"
          className="register-toggle-btn mt-3 w-100"
          variant="text"
        >
          New User? Please Register
        </Button>
      </NavLink>
    </div>
  );
};

export default Login;
