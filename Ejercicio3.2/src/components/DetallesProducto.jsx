import React from 'react';

function DetallesProducto({ caracteristicas, children }) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <ul>
        {caracteristicas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default DetallesProducto;
