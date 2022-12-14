import { Link } from "react-router-dom";

import { useAuth } from "../Auth/AuthProvider";
import Container from "../shared/components/Container";

const Nav = () => {
  const { isLogged, state, signout } = useAuth();
  return (
    <header className="flex h-[60px] items-center justify-between px-4 text-blue-900">
      <Container>
        <div className="flex items-center justify-between">
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
                  <Link
                    to="/login"
                    className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Ingresar
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Nav;
