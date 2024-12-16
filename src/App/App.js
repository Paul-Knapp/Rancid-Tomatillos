import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Movies from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState([]);
  const [posters, setPosters] = useState([])

  function addMovie(newMovie) {
    setMovies(...movies, newMovie)
  };

  function addPoster(newPoster) {
    setPosters(...posters, newPoster)
  };


  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer movies={movies}></MoviesContainer>
    </main>
  );
}

export default App;
