import React from 'react';
import { productos } from './datos/Productos';
import GaleriaProductos from './components/GaleriaProductos';


import './App.css'

function App() {
  return (
    <div className="App">
      <GaleriaProductos productos={productos} />
    </div>
  );
}

export default App;
