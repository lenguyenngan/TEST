import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import ExploreBanner from "./components/ExploreBanner";
import movieData from "./data/movieData";
import "./App.css";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app">
      <Navbar />
      <ExploreBanner movie={selectedMovie} />
      <MovieList movies={movieData.data} onSelectMovie={handleSelectMovie} />
    </div>
  );
};

export default App;
