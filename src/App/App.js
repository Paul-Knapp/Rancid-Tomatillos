import './App.css';
import searchIcon from '../icons/search.png';

import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies] = useState();

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      <MoviesContainer movies={movies}></MoviesContainer>
    </main>
  );
}

export default App;
