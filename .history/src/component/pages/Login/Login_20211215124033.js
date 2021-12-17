import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
    const history = useN();
    
    return (
        <div>
            <h2> Please Login</h2>
        </div>
    );
};

export default Login;