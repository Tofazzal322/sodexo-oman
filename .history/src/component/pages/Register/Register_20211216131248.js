import React from 'react';

const Register = () => {
    return (
        <div>
            <h2> Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Register;