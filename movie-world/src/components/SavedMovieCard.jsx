import React from "react";
import MovieCard from "./MovieCard";
import FilterMovie from "./FilterMovie";

const SavedMovieCard = () => {
  return (
    <>
      <div className="movie-list">
        <FilterMovie />
        <div className="saved-card container">
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default SavedMovieCard;
