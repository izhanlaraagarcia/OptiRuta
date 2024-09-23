import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../api/auth';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
