import React from 'react';
import './App.css';

import { productos } from './datos/Productos';
import FichaProducto from './components/FichaProducto';

function App() {
 
  return (
    <div className="galeria-productos">
      {productos.map((producto) => (
        <FichaProducto key={producto.id} producto={producto}>
          <button className="boton-carrito">🛒 Añadir al carrito</button>
        </FichaProducto>
      ))}
    </div>
  );
  
}

export default App
