import './MovieDetails.css';
import movie_details from '../data/movie_details'

function MovieDetails() {
  return (
    <section className='MovieDetails'>
      <img src={movie_details.backdrop_path} alt={`${movie_details.title}`} className="movie-backdrop" />
      <h3>{movie_details.title}</h3>
      <section className='Genres'>
        {movie_details.genre_ids.map((genre => `<p>${genre}</p>`)
        )}
      </section>
      <p>{movie_details.overview}</p>
    </section>
  );
}

export default MovieDetails;