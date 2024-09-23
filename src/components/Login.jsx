import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../api/auth'; // Importa la función de login con Google

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("Inicio de sesión exitoso:", user);
      navigate('/dashboard'); // Redirige al dashboard tras el inicio de sesión exitoso
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
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
