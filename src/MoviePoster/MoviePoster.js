import './MoviePoster.css';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'

function MoviePoster({ poster }) {
  return (
    <section className='MoviePoster'>
      <div className="movie-poster-container">
        <img src={poster.poster_path} alt={`${poster.title}`} className="movie-poster" />
        <div className="vote-count">{poster.vote_count}</div>
          <btn className="upvote-button">
            <img src={upvote} alt="U" img/>
          </btn>
          <btn className="downvote-button">
            <img src={downvote} alt="D" img/>
          </btn>
      </div>
    </section>
  );
}

export default MoviePoster;