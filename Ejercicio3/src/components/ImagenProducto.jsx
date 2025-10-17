import React from 'react';

function ImagenProducto({ imagenURL, nombre }) {
  return (
    <img
      src={imagenURL}
      alt={nombre}
      className="imagen-producto"
    />
  );
}

export default ImagenProducto;