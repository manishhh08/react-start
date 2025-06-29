import React, { useState } from "react";
import SearchMovie from "./SearchMovie";
import MovieCard from "./MovieCard";

import image from "../assets/image.jpg";

const HeroSection = ({ addMovieList }) => {
  const [isSearching, setIsSearching] = useState(false);

  const [movieObject, setMovieObject] = useState({
    imdbID: "",
    title: "",
    image: "",
    detail: "",
  });
  return (
    <>
      <div className="herosection">
        <SearchMovie
          setMovieObject={setMovieObject}
          setIsSearching={setIsSearching}
        />
        {/* searched movie card */}
        <div className="container">
          <MovieCard {...movieObject} addMovieList={addMovieList} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
