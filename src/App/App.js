import './App.css';
import searchIcon from '../icons/search.png';

import { useState } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'

function App() {
  const [movies] = useState(movieDetails);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movieId) => {
    {console.log(movieId)}
    const selected = movies.find(movie => movie.id === movieId);
    setSelectedMovie(selected);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {console.log("Currently selected movie", selectedMovie)}
      {!selectedMovie ? (
        <MoviesContainer movies={movies} onClick={handleMovieClick} />
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