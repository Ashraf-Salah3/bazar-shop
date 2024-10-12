import React, { Fragment } from "react";
import Hoom from "./pages/Hoom";
import Header from "./component/header/Header";
import {  createHashRouter, Navigate, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Cart from "./component/cart/Cart";
import { productsData } from "./api/Api";
import ProductDetails from "./component/productDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/auth/Login";
import Rest from "./pages/auth/Rest";
import Register from "./pages/auth/Register";
import { useSelector } from "react-redux";
import ContactUs from "./pages/contactUs/ContactUs";
import PrivateRoute from './pages/PrivateRoute'

const Layout = () => {
  return (
    <Fragment>
      <ToastContainer />
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </Fragment>
   
  );
};

const App = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Hoom />,
          loader: productsData,
        },
        {
          path: '/product/:id',
          element: (
            <PrivateRoute isLoggedIn ={isLoggedIn}>
              <ProductDetails />
            </PrivateRoute>
          )
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute isLoggedIn ={isLoggedIn}>
              <Cart />
            </PrivateRoute>
          )
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/rest",
          element: <Rest />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path:"/contact",
          element: <ContactUs/>
        },
        {
          path: '*',
          element: <Navigate to="/" />,
        },
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
};

export default App;

