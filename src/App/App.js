import './App.css';
import { useEffect, useState, useCallback } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails'



function App() {
  const [movies, setMovies] = useState(Object.values(MovieDetails))
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
  const upVote = useCallback((movieId) => {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${movieId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vote_direction: 'up' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to upvote. No movie found with an ID of ${movieId}.`);
        }
        return response.json();
      })
      .then((updatedMovie) => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === updatedMovie.id ? { ...movie, vote_count: updatedMovie.vote_count } : movie
          )
        );
      })
      .catch((error) => console.error(error.message));
  }, []);

  const downVote = useCallback((movieId) => {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${movieId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vote_direction: 'down' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to downvote. No movie found with an ID of ${movieId}.`);
        }
        return response.json();
      })
      .then((updatedMovie) => {
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie.id === updatedMovie.id ? { ...movie, vote_count: updatedMovie.vote_count } : movie
          )
        );
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      {!selectedMovie ? (
        <MoviesContainer 
          movies={movies} 
          handleMovieClick={handleMovieClick} 
          upVote={upVote} 
          downVote={downVote} 
        />
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