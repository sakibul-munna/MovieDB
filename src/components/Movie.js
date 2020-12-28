import React from 'react';
import {Link} from "react-router-dom"

const Movie = (props) => {
    const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
    return (

            <div class="col s12 m5">
                <div class="card">
                    <div class="card-image">
                        {props.data.poster_path == null ? (<img src={"https://picsum.photos/200/300"} alt="Hudai" />) : 
                                    (<img src={ImageURL} style={{ width: "100", height: "100" }} alt={"Movie Title"} />)}
              <span class="card-title" style={{ fontFamily: "Arial", marginLeft: "10", paddingLeft: "20" }}>{props.data.title}</span>
                    </div>

                    <div class="card-content">
                        <p>{props.data.overview}</p>
                    </div>
                    <div class="card-action">
                        <Link to={{
                            pathname: "/movie/"+props.data.id,
                            movie_id: props.data.id
                            }}>See Details</Link>
                    </div>
                </div>
            </div>
    )
}



export default Movie;