import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    
  return (
    <div>
      <h2> Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Your Name" {...register("name")} />
        <input placeholder="Your Email" {...register("name")} />
        <input placeholder=" Your Password" {...register("password")} />
              <input type="submit" />
              
      </form>
    </div>
  );
};

export default Register;
