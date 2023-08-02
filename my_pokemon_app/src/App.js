import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import ErrorHandler from './components/Others/ErrorHandler';
import Navbar from './components/Navbar/Navbar';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <ErrorHandler>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </ErrorHandler>
    </div>
  );
}

export default App;
