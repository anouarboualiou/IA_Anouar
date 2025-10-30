import React from 'react';

const coloresPrioridad = {
  alta: 'border-danger',
  media: 'border-warning',
  baja: 'border-success',
};

const Tarea = ({ tarea, cambiarEstadoTarea }) => {
  const { id, texto, completada, prioridad } = tarea;

  return (
    <div
      className={`list-group-item d-flex align-items-center justify-content-between border-start border-4 ${coloresPrioridad[prioridad]} ${completada ? 'bg-light text-muted' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={() => cambiarEstadoTarea(id)}
    >
      <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {texto}
      </span>
      <span className="badge bg-secondary text-capitalize">{prioridad}</span>
    </div>
  );
};

export default Tarea;
