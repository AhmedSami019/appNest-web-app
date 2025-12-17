import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Loading from "../Components/Loading/Loading";
import { Component } from "react";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "category/:id",
        Component: AppDetails,
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
        {
            path: "/auth/login",
            Component: Login
        },
        {
            path: "/auth/register",
            Component: Register
        }
    ]
  },
]);
