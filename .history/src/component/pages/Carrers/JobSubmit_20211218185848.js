import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import loginIcon from "../../../images/loginicon.jpg";

const JobSubmit = () => {
    

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
  return (
    <div className="container ">
      {!isLoading && (
        <div className="login-section mt-5 mb-5 ms-5">
          <form onClick={handleSubmit(onSubmit)} method="post">
            <div class="imgcontainer">
              <h1 className="title-1"> FILL-UP FORM FOR APPLY </h1>
              <img
                className="w-25"
                src={loginIcon}
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
                              defaultValue={user.email}
                name="name"
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
                <b>Mobile</b>
              </label>
              <input
                {...register("mobile")}
                type="password"
                placeholder="Mobile"
                name="password"
                // required
              />
              <label htmlfor="psw">
                <b>Natonality</b>
              </label>
              <input
                {...register("mobile")}
                type="password"
                placeholder="Nationality"
                name="password"
                // required
              />
              <label htmlfor="psw">
                <b>Years Of Experience</b>
              </label>
              <input
                {...register("mobile")}
                type="password"
                placeholder="Years Of Experience"
                name="password"
                // required
              />
              <label htmlfor="psw">
                <b>Education</b>
              </label>
              <input
                {...register("mobile")}
                type="password"
                placeholder="Education"
                name="password"
                // required
              />
              <label htmlfor="psw">
                <b>Skills</b>
              </label>
              <input
                type="password"
                placeholder="Nationality"
                name="password2"
                {...register("password2")}
                // required
              />

              <button className="fs-3 fw-bold w-100" type="button">
                I agree. Apply for this job
              </button>
              {/* <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Remember me
              </label> */}
            </div>

            <div class="container">
              {/* <button type="button" class="cancelbtn">
                Reset
              </button> */}
              {/* <span class="psw">
                Forgot <a href="#home">password?</a>
              </span> */}
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
              Already Apply? Find More
            </Button>
          </NavLink>
        </div>
      )}

      {isLoading && <Spinner />}
      {user?.email && <Alert severity="success">Apply successfully!</Alert>}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default JobSubmit;
