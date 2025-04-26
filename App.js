// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MovieListPage from './components/MovieListPage';
import MovieDetailPage from './components/MovieDetailPage';
import SubscribeForm from './components/SubscribeForm';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/movies">Movies</Link> | 
        <Link to="/subscribe">Subscribe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/subscribe" element={<SubscribeForm />} />
      </Routes>
    </Router>
  );
};

export default App;