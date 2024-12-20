import './MovieDetails.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchMovieDetails = () => {
      fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch movie details');
          }
          return response.json();
        })
        .then(data => {
          console.log("this is data", data);
          setDetails(data);
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    };
  
    if (id) {
      console.log(id)
      fetchMovieDetails();
    }
  }, [id]);
  

  if (!details) {
    return <p>Loading Movie Details...</p>;
  }



  return (
    <section className='MovieDetails'>
      <button onClick={() => navigate('/')}>Back to Home</button>
        {console.log("what is details", details)}
        <img src={details.backdrop_path} alt={`${details.title} backdrop`} className="movie-backdrop" />
        <h3 className="title">{details.title}</h3>
          <div className='Genres'>
            {details.genres && details.genres.map((genre, index) => (
            <span key={index} className="genre">{genre}</span>
            ))}
          </div>
          <p>{details.overview}</p>
        <p>Average Rating: {details.average_rating}</p>
      <p>Release Date: {details.release_date}</p>
    </section>
  );
}

export default MovieDetails;