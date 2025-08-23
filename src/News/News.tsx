import '../News/News.css';
import { getapi } from '../Api/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const News = () => {
  type Article = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['news'],
    queryFn: getapi
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  if (isLoading) return <div className="text-center mt-5">Loading news...</div>;
  if (isError) return <div className="text-center mt-5 text-danger">Failed to load news.</div>;

  const totalItems = data.articles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const visibleArticles = data.articles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h4 className="fw-bold">Top News Highlights</h4>
      </div>

      <div className="row justify-content-center">
        {visibleArticles.map((article: Article, index: number) => (
          <div key={index} className="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={article.title}
                className="card-img-top img-fluid rounded-3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text text-muted">{article.description || 'No description available.'}</p>
                <a href={article.url} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
