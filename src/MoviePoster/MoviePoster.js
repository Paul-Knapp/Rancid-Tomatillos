import './MoviePoster.css';
import { useState } from 'react';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'
import { NavLink } from 'react-router-dom';


function MoviePoster({ poster, upVote, downVote }) {
  function increaseVote() {
    upVote(poster.id);
  }

  function decreaseVote() {
    downVote(poster.id);
  }

  return (
    <article>
      <div>
        <NavLink to={`/movie/${poster.id}`} className='MoviePoster'>
          <div className="movie-poster-container">
            <img src={poster.poster_path} alt={`${poster.title}`} className="movie-poster" />
          </div>
        </NavLink>
        <div className="vote-count">{poster.vote_count}</div>
        <div className="vote-buttons">
          <button className="upvote-button" onClick={increaseVote}>
            <img src={upvote} alt="U" />
          </button>
          <button className="downvote-button" onClick={decreaseVote}>
            <img src={downvote} alt="D" />
          </button>
        </div>
      </div>
    </article>
  );
}


export default MoviePoster;