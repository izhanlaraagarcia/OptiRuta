import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle } from '../api/auth'; // Importa la función de login con Google
import { LanguageContext } from '../api/LanguageProvider';

function Login() {
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const translates = {
    en: {
      login: "Login",
      error: "Failed to login. Please try again."
    },
    es: {
      login: "Iniciar sesión",
      error: "Error al iniciar sesión. Por favor, inténtalo de nuevo."
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      console.log("Inicio de sesión exitoso:", user);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setError(translates[language].error);
    }
  };

  return (
    <div className="login-container">
      <img src="../assets/img/logo.jpg" alt="Logo_Optiruta" />
      <button onClick={handleGoogleLogin}>{translates[language].login}</button>
      {error && <p className="error-message">{error}</p>} {/* Muestra el error si existe */}
    </div>
  );
}

export default Login;