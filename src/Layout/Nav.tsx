import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='flex bg-indigo-500 h-[60px] items-center justify-between px-4 text-white'>
      <h1>Foods</h1>
      <nav className='flex'>
        <ul className='flex gap-2'>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/list">Listado</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
