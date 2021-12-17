import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(data.email, data.password, data.name, navigation);
  };

  {
    /* <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-100 mt-4"
            placeholder="Your Name"
            {...register("name")}
          />
          <input
            className="w-100 mt-2"
            placeholder="Your Email"
            {...register("email")}
          />
          <input
            className="w-100 mt-2"
            placeholder=" Your Password"
            {...register("password")}
          />
          <input
            className="w-100 mt-2"
            placeholder=" Confirm Password"
            {...register("password2")}
          />
                  <input className="w-100 mt-2 mb-3" type="submit" />
                  
                  <NavLink className="bg-warning py-2" style={{ textDecoration: "none" }} to="/login">
                    <Button className="register-toggle-btn  text-secondary fw-bold w-100" variant="text">
                      Already Registered? Please Login
                    </Button>
                  </NavLink>
        </form> */
  }

  return (
    <div className="container register-container">
      {/* <h2 className="mt-5 text-center title-1"> Please Register</h2> */}

      {!isLoading && (
        <div className="login-section mt-5 mb-5 ms-5">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div class="imgcontainer">
              <h1 className="title-1"> New users register with</h1>
              <img
                className="w-25"
                src="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
                alt="Avatar"
                class="avatar"
              />
            </div>

            <div class="container">
              <label htmlfor="uname">
                <b>Your Name</b>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                name="uname"
                // required
              />

              <label htmlfor="psw">
                <b>Your Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                {...register("email")}
                // required
              />
              <label htmlfor="psw">
                <b>Password</b>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                name="password"
                // required
              />
              <label htmlfor="psw">
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password2"
                {...register("password2")}
                // required
              />

              <button className="fs-3 fw-bold" type="submit">
                I agree. Create my account
              </button>
              <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Remember me
              </label>
            </div>

            <div class="container">
              <button type="button" class="cancelbtn">
                Reset
              </button>
              <span class="psw">
                Forgot <a>password?</a>
              </span>
            </div>
          </form>
          <NavLink
            className=" py-2"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            <Button
              className="register-toggle-btn  text-secondary fw-bold w-100"
              variant="text"
            >
              Already Registered? Please Login
            </Button>
          </NavLink>
        </div>
      )}

      {isLoading && <Spinner />}
      {user?.email && (
        <Alert severity="success">User Created successfully!</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default Register;
