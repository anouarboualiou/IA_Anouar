import { useState } from 'react';
import proyectosData from '../datos/proyectos';
import ProjectColumn from './ProjectColumn';

export default function Dashboard() {

  const [proyectos, setProyectos] = useState(proyectosData);

 
  const [filtroTexto, setFiltroTexto] = useState('');

  
  function handleActualizarEstado(proyectoId, nuevoEstado) {
    setProyectos((prev) =>
      prev.map((p) => (p.id === proyectoId ? { ...p, estado: nuevoEstado } : p))
    );
  }

  
  const estados = ['Pendiente', 'En Progreso', 'Completado'];

  
  const proyectosFiltrados = proyectos.filter((p) =>
    `${p.titulo} ${p.descripcion}`
      .toLowerCase()
      .includes(filtroTexto.toLowerCase())
  );

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tablero de Proyectos</h2>
        <div style={{ minWidth: 240 }}>
          <input
            className="form-control"
            placeholder="Filtrar proyectos por título o descripción..."
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {estados.map((estado) => (
          <div key={estado} className="col-md-4">
            <ProjectColumn
              titulo={estado}
              proyectos={proyectosFiltrados.filter((p) => p.estado === estado)}
              onActualizarEstado={handleActualizarEstado}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
