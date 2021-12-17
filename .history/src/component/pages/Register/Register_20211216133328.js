import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(data.email, data.password, data.name, navigate);
  };

  return (
    <div className="container register-container">
          <h2 className="mt-5 text-center title-1"> Please Register</h2>
          
      {!isLoading && (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  
                  <NavLink className="bg-warning " style={{ textDecoration: "none" }} to="/login">
                    <Button className="register-toggle-btn w-100" variant="text">
                      Already Registered? Please Login
                    </Button>
                  </NavLink>
        </form>
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
