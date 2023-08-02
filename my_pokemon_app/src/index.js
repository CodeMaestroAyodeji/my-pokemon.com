import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorHandler from './components/Others/ErrorHandler';
import './index.css';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
    <ErrorHandler>
      <App />
    </ErrorHandler>
    <PokemonDetails />
  </React.StrictMode>,
  document.getElementById('root')
);