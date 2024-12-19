import './MovieDetails.css';
import { useEffect, useState } from 'react';

function MovieDetails(selectedMovie) {
 const [movie_details, setdetails] = useState([])

  useEffect( () =>{
    getMoviedetails()
  },[])

   
  function getMoviedetails() {
    return fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${selectedMovie.id}`)
      .then(response => response.json())
      .then(data => {setdetails(data)})
      .catch(error => console.log(error))
    }


  return (
    <section className='MovieDetails'>
      <img src={movie_details.backdrop_path} alt={`${movie_details.title}`} className="movie-backdrop" />
      <h3 className="title"> {movie_details.title}</h3>
      {/* <section className='Genres'>
        {movie_details.genre_ids.map((genre => <p>{genre}</p>)
        )}
      </section> */}
      <p>{movie_details.overview}</p>
    </section>
  );
}

export default MovieDetails;