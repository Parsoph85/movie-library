// src/components/MovieListPage.js
import React, { useEffect, useState } from 'react';
import { movies } from '../data';
import { Link } from 'react-router-dom';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = () => {
      setTimeout(() => {
        setMovieList(movies);
      }, 1000);
    };
    fetchMovies();
  }, []);

  const filteredMovies = movieList.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Movie List</h1>
      <input 
        type="text" 
        placeholder="Search movies..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListPage;
