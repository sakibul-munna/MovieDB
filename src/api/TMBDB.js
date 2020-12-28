import axios from 'axios';

const TMBDB = axios.create({
        baseURL: "https://api.themoviedb.org/3/",

    }
);

const getMoviesbyTerm = (SearchTerm, setMovies, page_number,  setTotalPages) =>{
    TMBDB.get('/search/movie', {
        params:{
            api_key:"eff2d446b67ef764e0eb9df7d145c128",
            query: SearchTerm,
            page: page_number
        },
    }).then((Response)=>{
        console.log(Response);
        setMovies(Response.data.results);
        setTotalPages(Response.data.total_pages);
    })
}

const getMovieDetails = (movie_ID,setCurrentMovie) =>{
    TMBDB.get('/movie/'+movie_ID, {
        params:{
            api_key:"eff2d446b67ef764e0eb9df7d145c128",
        },
    }).then((Response)=>{
        console.log(Response.data);
        setCurrentMovie(Response.data);
    })
}

export {getMoviesbyTerm, getMovieDetails}