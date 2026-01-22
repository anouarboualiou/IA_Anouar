import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink> |{' '}
          <NavLink to="/dashboard">Panel de Tareas</NavLink> |{' '}
          <NavLink to="/profile">Perfil</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
