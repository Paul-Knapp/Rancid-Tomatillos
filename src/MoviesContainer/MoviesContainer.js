import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import moviePosters from '../movie_posters';
import { useState } from 'react';

function Movies({handleMovieClick}) {
  console.log("what is happening",moviePosters)
  return (
      <section className='MoviesContainer'>
        {moviePosters.map((movie) => <MoviePoster key={movie.id} poster={movie} voteCount={movie.vote_count} handleMovieClick={handleMovieClick}/>)}
      </section>
  );
}
  
export default Movies;