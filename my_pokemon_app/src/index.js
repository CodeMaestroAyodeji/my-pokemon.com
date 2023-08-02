import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import loadingImage from './loading.gif'; // Import your loading image here

// Lazy loading for the App component
const LazyApp = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<img src={loadingImage} alt="Loading..." />}>
      <Router>
        <LazyApp />
      </Router>
    </Suspense>
    <PokemonDetails />
  </React.StrictMode>,
  document.getElementById('root')
);