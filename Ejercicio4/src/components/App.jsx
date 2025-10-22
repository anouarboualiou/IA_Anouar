import { useState } from 'react';
import usuariosData from '../datos/usuarios';
import UserList from './UserList';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';

export default function App() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const usuariosFiltrados = usuariosData.filter((u) =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const usuarioSeleccionado = usuariosData.find(
    (u) => u.id === usuarioSeleccionadoId
  );

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>Usuarios</h1>
        <SearchBar valorBusqueda={busqueda} onBuscar={setBusqueda} />
        <UserList
          usuarios={usuariosFiltrados}
          onSeleccionarUsuario={setUsuarioSeleccionadoId}
        />
      </div>

      <div style={{ flex: 1 }}>
        {usuarioSeleccionado ? (
          <ProfileCard usuario={usuarioSeleccionado} />
        ) : (
          <p style={{ color: '#888' }}>
            Selecciona un usuario para ver los detalles
          </p>
        )}
      </div>
    </div>
  );
}
