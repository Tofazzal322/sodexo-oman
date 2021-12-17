import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();
    


    const onSubmit = (data) => {
        if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
        registerUser(data.email,data.password, data.name, navigate);
    };
    
  return (
    <div className="container register-container">
      <h2 className="mt-5 text-center title-1"> Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="w-100 mt-4" placeholder="Your Name" {...register("name")} />
        <input className="w-100 mt-2" placeholder="Your Email" {...register("email")} />
        <input className="w-100 mt-2" placeholder=" Your Password" {...register("password")} />
        <input className="w-100 mt-2" placeholder=" Confirm Password" {...register("password")} />
              <input className="w-100 mt-2 mb-5" type="submit" />
              
      </form>
    </div>
  );
};

export default Register;
