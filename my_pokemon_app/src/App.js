import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList'; // Updated import path
import ErrorHandler from './components/Others/ErrorHandler';
import Navbar from './components/Navbar/Navbar'; // Updated import path
import PokemonDetails from './components/PokemonDetails/PokemonDetails'; // Updated import path

function App() {
  return (
    <div className="App">
      <ErrorHandler>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </Router>
      </ErrorHandler>
    </div>
  );
}

export default App;
