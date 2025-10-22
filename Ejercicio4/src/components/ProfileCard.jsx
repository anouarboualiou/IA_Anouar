export default function ProfileCard({ usuario }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '16px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={usuario.avatarUrl}
        alt={usuario.nombre}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          marginBottom: '12px',
        }}
      />
      <h2>{usuario.nombre}</h2>
      <p style={{ color: '#555' }}>{usuario.email}</p>

      <div style={{ marginTop: '10px', textAlign: 'left' }}>
        <strong>Dirección:</strong>
        <p>{usuario.direccion.calle}</p>
        <p>{usuario.direccion.ciudad}</p>

        <strong>Aficiones:</strong>
        <ul>
          {usuario.aficiones.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
