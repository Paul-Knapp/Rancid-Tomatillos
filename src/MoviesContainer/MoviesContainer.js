import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import { useState } from 'react';


function Movies({movies, handleMovieClick, upVote, downVote}) {
  return (
    <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MoviePoster 
          key={movie.id} 
          poster={movie} 
          voteCount={movie.vote_count} 
          handleMovieClick={handleMovieClick}
          upVote={upVote}
          downVote={downVote}
        />
      ))}
    </section>
  );
}

  
export default Movies;