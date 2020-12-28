import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import NavBar from './components/NavBar';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <NavBar />
            <div>
                <Route path="/" exact component={App}></Route>
                <Route path="/movie/:id" exact component={MovieDetails} />
            </div>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root'));