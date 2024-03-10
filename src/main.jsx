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
import AuthProvider from "./Provider/AuthProvider.jsx";
import UpdateProducts from "./Pages/UpdateProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path:'/update/:id',
        element:<UpdateProducts></UpdateProducts>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
