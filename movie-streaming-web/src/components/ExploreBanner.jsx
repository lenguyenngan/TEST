import React from "react";

const ExploreBanner = ({ movie }) => {
  if (!movie) {
    return (
      <div className="explore-banner">
        <h1>New Release</h1>
      </div>
    );
  }

  return (
    <div className="explore-banner">
      <img src={movie.image} alt={movie.movieName} />
      <div className="banner-info">
        <h2>{movie.movieName}</h2>
        <p>{movie.description}</p>
        <p>Episode: {movie.episode}</p>
      </div>
    </div>
  );
};

export default ExploreBanner;
