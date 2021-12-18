import React from 'react';

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