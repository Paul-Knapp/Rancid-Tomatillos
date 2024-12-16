import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';
import movieDetails from '../data/movie_details';
import moviePosters from '../data/movie_posters';

function Movies() {
  return (
      <section className='MoviesContainer'>
        {moviePosters.map((movie) => (
        <MoviePoster key={movie.id} poster={movie} voteCount={movie.vote_count} ></MoviePoster>
        ))}
      </section>
  );
}
  
export default Movies;