import React from 'react';
import ImagenProducto from './ImagenProducto';
import './FichaProducto.css'; 

function FichaProducto({ producto, children }) {
  const { nombre, descripcion, precio, imagenURL } = producto;

  return (
    <div className="ficha-producto">
      <ImagenProducto imagenURL={imagenURL} nombre={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p className="precio">${precio.toFixed(2)}</p>
      {children}
    </div>
  );
}

export default FichaProducto;