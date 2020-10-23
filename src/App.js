import React, { useState, useEffect }  from 'react';
import Movie from './Component/Movie';




function App() {

  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([]);
  const [search_keyword, setSearch_keyword] = useState([]);

  useEffect(async () => {
      getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }

  // Bat su kien OnSubmit khi user tim kiem phim
  const handleOnSubmit = (event) => {
    event.preventDefault(); // giup User khi submit form se ko mat di keyword vua search

    if(search_keyword) {
      getMovies(SEARCH_API + search_keyword);
      // setSearch_keyword("");
    }
  }

  // Bat su kien OnChange khi value search_keyword thay doi
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setSearch_keyword(event.target.value);
  }

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" 
                 type="search"  
                 placeholder="Search movies..."
                 value={search_keyword}
                 onChange={handleOnChange}/>
        </form>
      </header>

      <div className="Movie-App">
        <div className="movie-container">
          {movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
