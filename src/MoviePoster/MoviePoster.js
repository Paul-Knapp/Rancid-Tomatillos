import './MoviePoster.css';
import { useState } from 'react';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'

function MoviePoster({ poster, handleMovieClick, upVote, downVote }) {
  function increaseVote() {
    upVote(poster.id);
  }

  function decreaseVote() {
    downVote(poster.id);
  }

  return (
    <section className='MoviePoster'>
      <div className="movie-poster-container">
        <img src={poster.poster_path} alt={`${poster.title}`} className="movie-poster" onClick={() => handleMovieClick(poster.id)} />
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
    </section>
  );
}


export default MoviePoster;