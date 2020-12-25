import axios from 'axios';

const TMBDB = axios.create({
        baseURL: "https://api.themoviedb.org/3/",

    }
);

const getMoviesbyTerm = (SearchTerm, setMovies) =>{
    TMBDB.get('/search/movie', {
        params:{
            api_key:"eff2d446b67ef764e0eb9df7d145c128",
            query: SearchTerm
        },
    }).then((Response)=>{
        console.log(Response);
        setMovies(Response.data);
    })
}

export {getMoviesbyTerm}