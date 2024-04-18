import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/login";

import routes from "~react-pages";

const router = createBrowserRouter(routes);

const Main = () => {
  const [userData, setUserData] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false); // État pour afficher/masquer le formulaire de connexion

  const handleLoginSuccess = (userData) => {
    console.log("Utilisateur connecté:", userData);
    setUserData(userData);
    setShowLoginForm(false); // Masquer le formulaire de connexion après la connexion réussie
  };

  return (
    <React.StrictMode>
      <Header userData={userData} onLoginClick={() => setShowLoginForm(true)} />
      {showLoginForm && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
