import React, { useState } from 'react';
import Filtros from './components/Filtros';
import ListaTareas from './components/ListaTareas';
import ResumenTareas from './components/ResumenTareas';

const App = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender sobre renderizado de listas en React', completada: true, prioridad: 'alta' },
    { id: 2, texto: 'Practicar hooks y estado', completada: false, prioridad: 'media' },
    { id: 3, texto: 'Leer documentación de Bootstrap', completada: false, prioridad: 'baja' },
    { id: 4, texto: 'Desplegar la app en Netlify', completada: false, prioridad: 'alta' },
  ]);

  const [filtro, setFiltro] = useState('todas');

  const cambiarEstadoTarea = (id) => {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const tareasFiltradas =
    filtro === 'todas'
      ? tareas
      : tareas.filter((t) => t.prioridad === filtro);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">📋 Dashboard de Tareas</h1>

      <Filtros filtro={filtro} setFiltro={setFiltro} />

      <ListaTareas tareas={tareasFiltradas} cambiarEstadoTarea={cambiarEstadoTarea} />

      <ResumenTareas tareasVisibles={tareasFiltradas} totalTareas={tareas.length} />
    </div>
  );
};

export default App;
