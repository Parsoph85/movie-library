// src/components/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = () => {
      setTimeout(() => {
        const foundMovie = movies.find(m => m.id === parseInt(id));
        setMovie(foundMovie);
      }, 1000);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetailPage;
