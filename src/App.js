import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import {getMoviesbyTerm} from "./api/TMBDB";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

const App = () => {
    const [SearchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    function handleChange(event) {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        await getMoviesbyTerm(SearchTerm,setMovies,currentPage, setTotalPages);
    }

    const nextPage = async (page_number) =>{
        setCurrentPage(page_number);
        await getMoviesbyTerm(SearchTerm,setMovies,currentPage, setTotalPages)
    }
    return(
        <div>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <MovieList movies = {movies}/>
            {totalPages > 1 ? <Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages}/>: ""}
        </div>
    )
}

export default App;