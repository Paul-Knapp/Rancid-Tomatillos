import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import movieDetails from '../data/movie_details';
import moviePosters from '../data/movie_posters';
import { useState } from 'react';

function Movies(onMovieClick) {
  
  return (
      <section className='MoviesContainer'>
        {moviePosters.map((movie) => (
        <MoviePoster key={movie.id} poster={movie} voteCount={movie.vote_count} onClick={() => {console.log("please work"); onMovieClick(movie.id)}}></MoviePoster>
        ))}
      </section>
  );
}
  
export default Movies;