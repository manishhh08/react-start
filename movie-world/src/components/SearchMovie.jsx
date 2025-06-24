import React from "react";

const SearchMovie = () => {
  return (
    <div className="search">
      <input type="text" />
      <label htmlFor="text" aria-placeholder="Search movie from here"></label>
      <button>Search me</button>
    </div>
  );
};

export default SearchMovie;
