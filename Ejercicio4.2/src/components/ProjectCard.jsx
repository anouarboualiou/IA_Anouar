import TeamMemberList from './TeamMemberList';

function prioridadColor(prioridad) {
 
  switch (prioridad) {
    case 'Alta':
      return 'bg-danger';
    case 'Media':
      return 'bg-warning text-dark';
    case 'Baja':
      return 'bg-success';
    default:
      return 'bg-secondary';
  }
}

export default function ProjectCard({ proyecto, onActualizarEstado }) {
  const estadosPosibles = ['Pendiente', 'En Progreso', 'Completado'];

  
  const otrasOpciones = estadosPosibles.filter((e) => e !== proyecto.estado);

  return (
    <div className="card shadow-sm">
      <div className="card-body p-3">
        <div className="d-flex align-items-start justify-content-between">
          <div>
            <h6 className="card-title mb-1">{proyecto.titulo}</h6>
            <p className="card-text small text-muted mb-2">{proyecto.descripcion}</p>

            <div className="d-flex align-items-center gap-2 mb-2">
              <small className="d-inline-flex align-items-center">
                <span
                  className={`badge ${prioridadColor(proyecto.prioridad)} me-2`}
                  style={{ width: 10, height: 10, borderRadius: '50%' }}
                ></span>
                <strong className="ms-1">{proyecto.prioridad}</strong>
              </small>
            </div>

            <TeamMemberList responsables={proyecto.responsables} />
          </div>

          <div style={{ minWidth: 140 }}>
            <div className="mb-2">
              <select
                className="form-select form-select-sm"
                value={proyecto.estado}
                onChange={(e) => onActualizarEstado(proyecto.id, e.target.value)}
                aria-label="Cambiar estado del proyecto"
              >
                
                <option value="Pendiente">Pendiente</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
              </select>
            </div>

            
            <div className="d-grid gap-1">
              {otrasOpciones.map((o) => (
                <button
                  key={o}
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => onActualizarEstado(proyecto.id, o)}
                >
                  Mover a {o}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
