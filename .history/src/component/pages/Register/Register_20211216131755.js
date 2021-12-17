import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    
  return (
    <div class>
      <h2> Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="w-100" placeholder="Your Name" {...register("name")} />
        <input className="w-100" placeholder="Your Email" {...register("email")} />
        <input className="w-100" placeholder=" Your Password" {...register("password")} />
              <input type="submit" />
              
      </form>
    </div>
  );
};

export default Register;
