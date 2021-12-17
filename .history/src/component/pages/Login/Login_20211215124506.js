import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
    const navigation = useNavigate();

    ////////////////////////  Login With User /////////////////////
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  /////////////////////////////////////////////

  //////////////////  Login with user ///////////////////
  const handleLoginSubmit = (e) => {
    const email = loginData?.email;
    const password = loginData?.password;

    loginUser(email, password, location, navigation);
    e.preventDefault();
  };
  //////////////////////////////////////////////////

  /////////////////  Login with Google //////////////////
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigation);
  };
  ////////////////////////////////////////////////////////
    
    return (
        <div>
            <h2> Please Login</h2>
            
        </div>
    );
};

export default Login;