import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AddProducts from "./Pages/AddProducts.jsx";
import MyCarts from "./Pages/MyCarts.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/myCarts",
        element: <MyCarts></MyCarts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
