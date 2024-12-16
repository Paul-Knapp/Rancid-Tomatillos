import './MoviePoster.css';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';

function MoviePoster({ poster }) {
  return (
    <section className='MoviePoster'>
      <div className="movie-poster-container">
        <img src={poster.poster_path} alt={`${poster.title}`} className="movie-poster" />
        <div className="vote-count">{poster.vote_count}</div>
      </div>
    </section>
  );
}

export default MoviePoster;