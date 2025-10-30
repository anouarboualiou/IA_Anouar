import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarEstadoTarea }) => {
  return (
    <div className="list-group mb-4">
      {tareas.length > 0 ? (
        tareas.map((tarea) => (
          <Tarea key={tarea.id} tarea={tarea} cambiarEstadoTarea={cambiarEstadoTarea} />
        ))
      ) : (
        <p className="text-center text-muted">No hay tareas para este filtro.</p>
      )}
    </div>
  );
};

export default ListaTareas;
