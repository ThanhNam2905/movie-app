import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({title, poster_path, overview, vote_average}) => {

    const setVote_Average = (vote) => {
        if(vote >= 8) return "green"
        else if(vote >= 6) return "orange"
        else return "red"
    }

    return (
    <div className="movie">
        <img src={(poster_path) ? (IMAGE_API + poster_path) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdabjye5wnu90Ph8mfzwhRcfvjSCukSC6GNg&usqp=CAU'} alt={title}/>
        <div className="movie-info">
            <h2>{title}</h2>
            <span className={`vote-Rage ${setVote_Average(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h3>Overview:</h3>
            <p>{overview}</p>
        </div>
    </div>
    )
}

export default Movie;