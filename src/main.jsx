import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "~react-pages";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
