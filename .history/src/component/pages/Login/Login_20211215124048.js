import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
    const navig = useNavigate();
    
    return (
        <div>
            <h2> Please Login</h2>
        </div>
    );
};

export default Login;