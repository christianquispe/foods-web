import { RouteObject } from "react-router";

import { ProtectedRoutes, PublicRoutes } from "./types";

import { Root } from "./root";

import FoodsPage from "./../Foods/FoodsPage";
import LoginPage from "../Auth/LoginPage";
import RequireAuth from "../Auth/RequireAuth";

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
  {
    path: "/"+ProtectedRoutes.DASHBOARD,
    element: (
      <RequireAuth>
        <Root />
      </RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <FoodsPage />,
      },
    ],
  },
];
