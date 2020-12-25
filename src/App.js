import React, { useState } from "react";
import NavBar from './components/NavBar';
import SearchBar from "./components/SearchBar";
import {getMoviesbyTerm} from "./api/TMBDB";
import MovieList from "./components/MovieList";

const App = () => {
    const [SearchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const handleChange = (event) =>{
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        await getMoviesbyTerm(SearchTerm,setMovies);
    }
    return(
        <div>
            <NavBar/>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <MovieList movies = {movies}/>
        </div>
    )
}

export default App;