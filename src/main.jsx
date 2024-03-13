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
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(" https://technology-electronics-server-rose.vercel.app/product"),
      },
      {
        path: "/addProducts",
        element: <PrivetRoute> <AddProducts></AddProducts> </PrivetRoute>,
      },
      {
        path: "/update/:id",
        element: <PrivetRoute><UpdateProducts></UpdateProducts></PrivetRoute>,
        loader: ({ params }) =>
          fetch(` https://technology-electronics-server-rose.vercel.app/${params.id}`),
      },
      {
        path: "/myCarts",
        element: <PrivetRoute><MyCarts></MyCarts></PrivetRoute>,
        loader: () => fetch('https://technology-electronics-server-rose.vercel.app/product'),
      },
      // {
      //   path:'/details',
      //   element:<Details></Details>,
      //   loader:()=>fetch('http://localhost:5000/product')
      // },
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
