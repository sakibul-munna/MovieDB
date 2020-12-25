import React from 'react';


const Movie = (props) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src="images/sample-1.jpg" alt="Hp"/>
                            <span className="card-title">Card Title</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                        
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Movie;