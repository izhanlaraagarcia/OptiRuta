// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBr_-QQz-S0TrOjSSLfxHHCQPTY3dWuIIA",
  authDomain: "optiruta-4b721.firebaseapp.com",
  projectId: "optiruta-4b721",
  storageBucket: "optiruta-4b721.appspot.com",
  messagingSenderId: "1032087009861",
  appId: "1:1032087009861:web:bd6ce38ed27067a68bc12c",
  measurementId: "G-8Y5HYVV4TK"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log("Usuario logueado:", user);
      return user;
    })
    .catch(error => {
      console.error("Error durante el login:", error);
      throw error;
    });
};
