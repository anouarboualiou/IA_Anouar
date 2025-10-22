export default function UserList({ usuarios, onSeleccionarUsuario }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {usuarios.map((u) => (
        <li
          key={u.id}
          onClick={() => onSeleccionarUsuario(u.id)}
          style={{
            cursor: 'pointer',
            padding: '8px 12px',
            borderBottom: '1px solid #eee',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          {u.nombre}
        </li>
      ))}
    </ul>
  );
}
