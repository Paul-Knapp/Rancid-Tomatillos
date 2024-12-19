import './App.css';
import searchIcon from '../icons/search.png';

import { useEffect, useState } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'

function getMovies() {
  return fetch('https://rancid-tomatillos-api.onrender.com/api/v1/movies')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

function movie_data() {
  useEffect(() => {
    getMovies()
      .then(data => setMovies(data.movies))
      .catch(error => console.error('error retrieving:', error));
  }, [])}

function App() {
  const [movies, setMovies] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null);


  // function handleMovieClick(movieId) {
  //   const selected = movies.find(movie => movie.id === movieId);
  //   setSelectedMovie(selected);
  // };

  function handleMovieClick(movieId) {
    const selected = movies[0]
    setSelectedMovie(selected)
  }

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {!selectedMovie ? (
        <MoviesContainer movies={movies} handleMovieClick={handleMovieClick} />
      ) : (
        <div>
          <MovieDetails movieDetails={selectedMovie} />
          <button className='back-button' onClick={handleBackToMovies}>Back to Movies</button>
        </div>
      )}
    </main>
  );
}

export default App;