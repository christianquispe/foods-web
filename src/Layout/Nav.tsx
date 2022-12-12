import { Link } from "react-router-dom";

import { useAuth } from "../Auth/AuthProvider";

const Nav = () => {
  const { isLogged, state, signout } = useAuth();
  return (
    <header className="flex bg-indigo-500 h-[60px] items-center justify-between px-4 text-white">
      <h1>{isLogged ? `Comidas para ${state.user.name}` : "Comidas"}</h1>
      <nav className="flex">
        <ul className="flex gap-2">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/list">Listado</Link>
          </li>
          {isLogged ? (
            <li>
              <button onClick={() => signout()}>Cerrar sesión</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Ingresar</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
