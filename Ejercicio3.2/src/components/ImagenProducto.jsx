import React from 'react';

function ImagenProducto({ url, alt }) {
  return (
    <img
      src={url}
      alt={alt}
      style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '0.5rem' }}
    />
  );
}

export default ImagenProducto;
