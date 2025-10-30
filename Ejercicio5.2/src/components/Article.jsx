import React from 'react';

const Article = ({ article, togglePin }) => {
  const { title, category, pinned } = article;

  return (
    <div className={`card ${pinned ? 'border-warning' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">
          {title} {pinned && <span className="badge bg-warning text-dark">Fijado</span>}
        </h5>
        <p className="card-text">Categoría: {category}</p>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => togglePin(article.id)}>
          {pinned ? 'Desfijar' : 'Fijar'}
        </button>
      </div>
    </div>
  );
};

export default Article;
