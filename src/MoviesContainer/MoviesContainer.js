import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import { useState } from 'react';




function Movies({movies ,handleMovieClick}) {
  // const [moviePosters] = useState(movies)
  
  
  return (
      <section className='MoviesContainer'>
        {movies.map((movie) => <MoviePoster key={movie.id} poster={movie} voteCount={movie.vote_count} handleMovieClick={handleMovieClick}/>)}
      </section>
  );
}
  
export default Movies;