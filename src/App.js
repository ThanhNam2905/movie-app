import React, { useState, useEffect }  from 'react';
import Movie from './Component/Movie';




function App() {

  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    fetch(FEATURED_API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

  }, [])

  return (
    <>
    <header>
      <input className="search" type="search"  placeholder="Search movies..."/>
    </header>

    <div className="Movie-App">
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
