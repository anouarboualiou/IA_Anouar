import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, togglePin }) => {
  return (
    <div className="row">
      {articles.map((article) => (
        <div key={article.id} className="col-md-6 mb-3">
          <Article article={article} togglePin={togglePin} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
