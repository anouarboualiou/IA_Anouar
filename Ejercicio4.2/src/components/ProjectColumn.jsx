import ProjectCard from './ProjectCard';

export default function ProjectColumn({ titulo, proyectos, onActualizarEstado }) {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{titulo}</h5>
        <span className="badge bg-secondary">{proyectos.length}</span>
      </div>
      <div className="card-body" style={{ minHeight: 200 }}>
        {proyectos.length === 0 ? (
          <p className="text-muted">No hay proyectos</p>
        ) : (
          proyectos.map((p) => (
            <div key={p.id} className="mb-3">
              <ProjectCard proyecto={p} onActualizarEstado={onActualizarEstado} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
