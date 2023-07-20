import {useState, useEffect} from "react";

import "./App.css";
import SearchIcon from "./Search.svg";
import MovieCards from "./MovieCards";

// Code 9df7dc9e

const API_URL = "https://www.omdbapi.com/?apikey=9df7dc9e";

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
  }

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState()

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies("Ironman");

   }, []);

    return (
        <div className="app">
            <h1>MovieClub</h1>
            <div className="search">
                <input 
                placeholder ="Search for a movie" 
                value= {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}    
                />
            </div>
                {
                    movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCards movie={movie} />
                            
                            ) ) }
                        </div>
                    ) : ( 
                      <div className="empty">
                        <h2>No Movie Found</h2>
                      </div>
                    )
                }
        

        </div>
        
    );

}
    

        export default App;