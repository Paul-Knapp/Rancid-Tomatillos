import './App.css';
import searchIcon from '../icons/search.png';

import { useState } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'

function App() {
  const [movies] = useState(Object.values(movieDetails));
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
          <button onClick={handleBackToMovies}>Back to Movies</button>
        </div>
      )}
    </main>
  );
}

export default App;