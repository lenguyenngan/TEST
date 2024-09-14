import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.image} alt={movie.movieName} />
      <h2>{movie.movieName}</h2>
      <p>Episode: {movie.episode}</p>
    </div>
  );
};

export default MovieCard;
