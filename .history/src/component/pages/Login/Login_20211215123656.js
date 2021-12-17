import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocatio();
    const history = useHistory();
    
    return (
        <div>
            <h2> Please Login</h2>
        </div>
    );
};

export default Login;