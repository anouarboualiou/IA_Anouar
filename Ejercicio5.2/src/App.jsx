import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmptyState from './components/EmptyState';

const allArticles = [
  { id: 'a1', title: 'React 19 ya está aquí', category: 'React', pinned: true },
  { id: 'a2', title: 'Novedades en CSS: View Transitions', category: 'CSS', pinned: false },
  { id: 'a3', title: 'State Management con Zustand', category: 'React', pinned: false },
  { id: 'a4', title: 'El futuro de JavaScript: Records y Tuples', category: 'JavaScript', pinned: false },
];

const categories = ['Todas', 'React', 'CSS', 'JavaScript'];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [articles, setArticles] = useState(allArticles);

  // Función para fijar/desfijar artículos
  const togglePin = (id) => {
    setArticles((prev) =>
      prev.map((a) => {
        if (a.id === id) return { ...a, pinned: true };
        return { ...a, pinned: false };
      })
    );
  };

  // Filtrado combinado búsqueda + categoría
  const filteredArticles = articles
    .filter((a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((a) => categoryFilter === 'Todas' || a.category === categoryFilter)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)); // Fijado al inicio

  return (
    <div className="container py-4">
      <h1 className="mb-4">📰 Feed de Noticias</h1>

      <div className="mb-3 d-flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${categoryFilter === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <hr />

      {filteredArticles.length > 0 ? (
        <ArticleList articles={filteredArticles} togglePin={togglePin} />
      ) : (
        <EmptyState message="No se encontraron artículos con los filtros seleccionados." />
      )}
    </div>
  );
}

export default App;
