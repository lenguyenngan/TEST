import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onSelectMovie(movie)}
        />
      ))}
    </div>
  );
};

export default MovieList;
