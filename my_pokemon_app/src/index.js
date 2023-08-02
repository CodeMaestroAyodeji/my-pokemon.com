import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import loadingImage from './loading.gif'; // Import your loading image here

const LazyApp = React.lazy(() => {
  // Simulate a delay before loading the lazy component (e.g., 5 seconds delay)
  return new Promise((resolve) => setTimeout(resolve, 5000)).then(() => import('./App'));
});

//const LazyPokemonDetails = React.lazy(() => {
  // Simulate a delay before loading the lazy component (e.g., 2 seconds delay)
  //return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => import('./components/PokemonDetails/PokemonDetails'));
//});

ReactDOM.render(
  <React.StrictMode>
     {/* Add the id attribute to the parent container of the lazy loading gif image */}
     <div id="">
      <Suspense fallback={<img className="llazy-loading-container" src={loadingImage} alt="Loading..." />}>
        <Router>
          <LazyApp />
        </Router>
      </Suspense>
    </div>
    <Suspense fallback={<div>Loading PokemonDetails...</div>}>
      <PokemonDetails />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
