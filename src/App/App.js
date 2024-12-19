import './App.css';
import searchIcon from '../icons/search.png';
import { useEffect, useState } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'



function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect( () =>{
      getMovies()
    },[])

   
    function getMovies() {
      return fetch('https://rancid-tomatillos-api.onrender.com/api/v1/movies')
        .then(response => response.json())
        .then(data => {setMovies(data)})
        .catch(error => console.log(error))
      }


  function handleMovieClick(movieId) {
    const selected = movies.find(movie => movie.id === movieId);
    setSelectedMovie(selected);
  };

  // function handleMovieClick(movieId) {
  //   const selected = movies[0]
  //   setSelectedMovie(selected)
  // }

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