import { RouteObject } from "react-router";

import { PublicRoutes } from "./types";

import { Root } from "./root";

import FoodsPage from "./../Foods/FoodsPage";
import LoginPage from '../Auth/LoginPage';

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <FoodsPage />,
      },
      {
        path: "",
        element: <FoodsPage />,
      },
      {
        path: PublicRoutes.FOOD,
        element: <FoodsPage />,
      },
      {
        path: PublicRoutes.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
];
