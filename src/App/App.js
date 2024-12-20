import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { Routes, Route, Router } from 'react-router-dom'
import Home from '../Home/Home.js';
import MovieDetails from '../MovieDetails/MovieDetails'


function App() {
  return (

        <main className='App'>
          <header>
            <h1>Rancid Tomatillos</h1>
          </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>

  );
}

export default App;