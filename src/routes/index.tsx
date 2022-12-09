import { RouteObject } from "react-router";

import { PublicRoutes } from "./types";

import { Root } from "./root";

import FoodsPage from "./../Foods/FoodsPage";

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
    ],
  },
];
