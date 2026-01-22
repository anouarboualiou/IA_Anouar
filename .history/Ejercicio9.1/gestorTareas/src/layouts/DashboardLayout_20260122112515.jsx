import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px' }}>
        <nav>
          <ul>
            <li>
              <NavLink to="/dashboard">Ver Tareas</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/new">Añadir Tarea</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <section style={{ marginLeft: '20px' }}>
        <Outlet />
      </section>
    </div>
  );
};

export default DashboardLayout;
