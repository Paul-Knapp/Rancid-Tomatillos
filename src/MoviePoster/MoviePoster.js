import './MoviePoster.css';
import { useState } from 'react';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'

function MoviePoster({ poster }) {
  const [voteCount, setVoteCount] = useState(poster.vote_count || 0)

  function increaseVote() {
    setVoteCount(voteCount + 1)
    console.log(voteCount)
  }

  function decreaseVote() {
    setVoteCount(voteCount - 1)
    console.log(voteCount)
  }

  return (
    <section className='MoviePoster'>
      <div className="movie-poster-container">
        <img src={poster.poster_path} alt={`${poster.title}`} className="movie-poster" />
        <div className="vote-count">{voteCount}</div>
        <div className="vote-buttons">
          <button className="upvote-button" onClick={increaseVote}>
            <img src={upvote} alt="U" img/>
          </button>
          <button className="downvote-button" onClick={decreaseVote}>
            <img src={downvote} alt="D" img/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MoviePoster;