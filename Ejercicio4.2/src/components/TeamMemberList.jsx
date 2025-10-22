export default function TeamMemberList({ responsables }) {
  if (!responsables || responsables.length === 0) {
    return <p className="text-muted small mb-0">Sin responsables asignados</p>;
  }

  return (
    <div className="d-flex align-items-center flex-wrap">
      {responsables.map((r) => (
        <div key={r.id} className="me-2 mb-1 d-flex align-items-center">
         
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              backgroundColor: '#e9ecef',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              marginRight: 8,
            }}
            title={r.nombre}
          >
            {r.nombre.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()}
          </div>
          <small>{r.nombre}</small>
        </div>
      ))}
    </div>
  );
}
