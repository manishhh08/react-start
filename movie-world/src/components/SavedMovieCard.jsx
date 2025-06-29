import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const SavedMovieCard = ({ movieList }) => {
  const [displayMovieList, setDisplayMovieList] = useState([]);
  const handleOnFilter = (filter) => {
    let tempList = movieList.filter(
      (item) => item.type == filter || filter == "all"
    );
    setDisplayMovieList(tempList);
  };

  useEffect(() => {
    setDisplayMovieList(movieList);
  }, [movieList]);

  return (
    <>
      <div className="movie-list">
        <div className="filter-button">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleOnFilter("all");
            }}
          >
            All
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              handleOnFilter("drama");
            }}
          >
            Drama
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleOnFilter("action");
            }}
          >
            Action
          </button>
        </div>
        <div className="saved-card container">
          {displayMovieList.map((movie) => (
            <MovieCard {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SavedMovieCard;
