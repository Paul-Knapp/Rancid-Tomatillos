import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import movieDetails from '../data/movie_details';
import moviePosters from '../data/movie_posters';
import { useState, useEffect } from 'react';


useEffect 


function Movies({handleMovieClick}) {
  
  return (
      <section className='MoviesContainer'>
        {moviePosters.map((movie) => <MoviePoster key={movie.id} poster={movie} voteCount={movie.vote_count} handleMovieClick={handleMovieClick}/>)}
      </section>
  );
}
  
export default Movies;