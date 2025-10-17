import React from 'react';

function PieFicha({ precio, enStock }) {
  return (
    <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
      {enStock ? (
        <>
          {precio.moneda}{precio.valor.toFixed(2)}
          {precio.enOferta && <span style={{ color: 'red', marginLeft: '0.5rem' }}>¡OFERTA!</span>}
        </>
      ) : (
        <span style={{ color: 'gray' }}>No disponible</span>
      )}
    </div>
  );
}

export default PieFicha;
