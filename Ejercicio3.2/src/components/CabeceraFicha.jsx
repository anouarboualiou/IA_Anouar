import React from 'react';

function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <h2>{nombre}</h2>
      <p style={{ fontSize: '0.85rem', color: '#555' }}>
        Vendedor: {vendedor.nombre} ⭐ {vendedor.rating}
      </p>
    </div>
  );
}

export default CabeceraFicha;
