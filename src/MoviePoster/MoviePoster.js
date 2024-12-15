import './MoviePoster.css';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';

function MoviePoster({poster}) {
  return (
    <section className='MoviePoster'>
      <img src={poster.poster_path} alt={`${poster.title}`}></img>
    </section>
  );
}

export default MoviePoster;