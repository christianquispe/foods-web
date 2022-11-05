import { Outlet } from "react-router-dom";
// import AuthStatus from "../Auth/AuthStatus";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      {/* <AuthStatus /> */}
      <Nav />
      <Outlet />
      <footer className="mt-auto py-4 flex justify-center bg-indigo-500 text-white">
        <span>Web contuída por Christian Quispe</span>
      </footer>
    </div>
  );
}
