import React from 'react';

const Filtros = ({ filtro, setFiltro }) => {
  const opciones = ['todas', 'alta', 'media', 'baja'];

  return (
    <div className="d-flex justify-content-center gap-2 mb-4">
      {opciones.map((op) => (
        <button
          key={op}
          className={`btn ${filtro === op ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFiltro(op)}
        >
          {op.charAt(0).toUpperCase() + op.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filtros;
