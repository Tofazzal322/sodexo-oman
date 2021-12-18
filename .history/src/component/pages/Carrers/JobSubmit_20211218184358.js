import React from 'react';
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import loginIcon from '../../../images/loginicon.jpg'

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
        <div>
            <h1> Job Submit Form </h1>


        </div>
    );
};

export default JobSubmit;