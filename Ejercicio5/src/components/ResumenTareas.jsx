import React from 'react';

const ResumenTareas = ({ tareasVisibles, totalTareas }) => {
  if (tareasVisibles.length === 0)
    return <p className="text-center text-muted">No hay tareas para este filtro.</p>;

  const completadas = tareasVisibles.every((t) => t.completada);

  return (
    <div className="text-center mt-3">
      {completadas ? (
        <p className="text-success fw-bold">
          🎉 ¡Felicidades! Has completado todas las tareas de esta sección.
        </p>
      ) : (
        <p>
          Mostrando <strong>{tareasVisibles.length}</strong> de{' '}
          <strong>{totalTareas}</strong> tareas.
        </p>
      )}
    </div>
  );
};

export default ResumenTareas;
