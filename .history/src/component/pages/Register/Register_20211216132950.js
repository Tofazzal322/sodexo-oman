import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
      {!}

      {isLoading && <Spinner />}
      {user?.email && (
        <Alert severity="success">User Created successfully!</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default Register;
