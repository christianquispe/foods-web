import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./Auth/AuthProvider";

import { routes } from "./routes";

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
