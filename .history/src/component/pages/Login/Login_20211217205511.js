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
    <div className="container register-container ">
      <h2 className="text-center title-1 mt-5"> Please Login</h2>
      <div className="w-100 align-center">
        <form onSubmit={handleLoginSubmit}>
          <input
            className="w-100"
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleOnChange}
          />
          <input
            className="w-100 mt-2"
            name="password"
            type="password"
            placeholder="Your Password"
            onChange={handleOnChange}
          />
        </form>

<div className="login-section mt-5 mb-5 me-5">
            <form onClick={"soo"} method="post">
              <div class="imgcontainer">
                <h1 className="title-1">Existing users login with</h1>
                <img className="w-25" src="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg" alt="Avatar" class="avatar" />
              </div>

              <div class="container">
                <label htmlfor="uname">
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />

                <label htmlfor="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <button className="fs-4 fw-bold" type="submit">Login</button>
                <label>
                  <input type="checkbox" checked="checked" name="remember" />{" "}
                  Remember me
                </label>
              </div>

              <div class="container">
                <button type="submit" class="cancelbtn">
                  Cancel
                </button>
                <span class="psw">
                  Forgot <a>password?</a>
                </span>
              </div>
            </form>
           
          </div>
        
        {/* <Button
          className="register-toggle-btn mb-3 mt-3 w-100"
          variant="primary"
          type="submit"
        >
          Login
        </Button> */}

        <Button
          // variant="outline"
          className="google-btn w-100"
          onClick={handleGoogleSignIn}
        >
          Sign in with google
        </Button>
        <Button
          // variant="outline"
          className="github-btn w-100 mt-3"
          onClick={handleGoogleSignIn}
        >
          Sign in with Github
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
    </div>
  );
};

export default Login;
