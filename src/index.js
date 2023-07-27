import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import NewProduct from "./Pages/NewProduct";
import ProductDetail from "./Pages/ProductDetail";
import MyCart from "./Pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "products/new",
        element: <NewProduct />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <MyCart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} App/>
  </React.StrictMode>
);
