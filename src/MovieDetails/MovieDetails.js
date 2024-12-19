import './MovieDetails.css';
import { useEffect, useState } from 'react';

function MovieDetails(selectedMovie) {
  const [details, setdetails] = useState(null)

  useEffect( () =>{
      fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${selectedMovie.movieDetails.id}`)
        .then(response => response.json())
        .then(data => setdetails(data))
        .catch(error => console.log(error))
  
  },[selectedMovie])

  if (!details) {
    return <p>Loading Movie Details...</p>
  }


  return (
    <section className='MovieDetails'>
      <img src={details.backdrop_path} alt={`${details.title}`} className="movie-backdrop" />
      <h3 className="title"> {details.title}</h3>
      {details.genre_ids.map((genre, value) => (
      <section className='Genres'>
     <p>{genre}</p>
      </section>
    ))}
      <p>{details.overview}</p>
    </section>
  );
}

export default MovieDetails;