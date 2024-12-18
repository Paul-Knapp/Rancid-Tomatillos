import './App.css';
import searchIcon from '../icons/search.png';

import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'


function App() {
  const [movies, setMovies] = useState(movieDetails);
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer  movies={movies}></MoviesContainer>
      <MovieDetails movieDetails={MovieDetails}></MovieDetails>
    </main>
  );
}

export default App;
