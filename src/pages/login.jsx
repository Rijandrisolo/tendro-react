import React, { useState } from "react";
import axios from "axios";

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction de gestionnaire pour soumettre le formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/findByEmail", {
        params: {
          email: email,
          password: password
        }
      });
      console.log("Réponse du serveur:", response.data);
      const userData = response.data;
      onLoginSuccess(userData);

      // Vous pouvez ajouter ici des actions à effectuer en cas de succès de la requête, comme rediriger l'utilisateur vers une nouvelle page
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      // Vous pouvez ajouter ici des actions à effectuer en cas d'erreur de la requête, comme afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-1/3 mx-auto mt-8 p-8 bg-white shadow-md rounded'
      >
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Mot de passe:
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Se connecter
        </button>
      </form>
    </>
  );
}
