import React from 'react';

const Login = () => {
    const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();
    return (
        <div>
            <h2> Please Login</h2>
        </div>
    );
};

export default Login;