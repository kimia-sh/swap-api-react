import './App.css';
import MovieList from './movieList';
import React, { useState } from 'react';
import Starship from './starships';


function App() {
    const [state, setstate] = useState(0);
    const [starshipsList, setStarshipsList] = useState(null);
    const starshipList = [
        "https://swapi.dev/api/starships/21/",
        "https://swapi.dev/api/starships/32/",
        "https://swapi.dev/api/starships/49/",
        "https://swapi.dev/api/starships/48/"
      ];
    if ( state == 0 ) {
    return (
      <div className="app">
        <MovieList state = {state} set = {setstate} setList={setStarshipsList} />


      
      </div>
    );
    }
    if( state == 1 ) {

        return (
            <div className="app">
              <Starship state = {state} set = {setstate} starshipsURLs={starshipsList}/>
      
            
            </div>
          );
        
    }
  };

export default App;
