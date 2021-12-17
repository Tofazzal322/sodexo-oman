import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    
  return (
    <div>
      <h2> Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="" {...register("email")} />
        <input placeholder="" {...register("name")} />
        <input placeholder="" {...register("password")} />
              <input type="submit" />
              
      </form>
    </div>
  );
};

export default Register;
