import './MovieCard.css'
import MovieDetails from '../MovieDetails/MovieDetails'
import MoviePoster from '../MoviePoster/MoviePoster.js'
import { useState, useEffect } from 'react';




function MovieCard({ MoviePoster, onSelectMovie }) {
  const [movieDetails, setMovieDetails] = useState(movieDetails);
    return (
      <div onClick={() =>
        onSelectMovie(MoviePoster)}>
        <MovieDetails className='hidden' MovieDetails={MovieDetails}></MovieDetails>
        </div>
  )
}



export default MovieCard;