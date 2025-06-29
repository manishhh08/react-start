import React, { useState } from "react";
import SearchMovie from "./SearchMovie";
import MovieCard from "./MovieCard";

import image from "../assets/image.jpg";

const HeroSection = ({ addMovieList }) => {
  const [movieObject, setMovieObject] = useState({
    imdbID: "test",
    title: "Avengers",
    image: { image },
    detail: "This is the review for the mentioned movie",
  });
  return (
    <>
      <div className="herosection">
        <SearchMovie setMovieObject={setMovieObject} />
        {/* searched movie card */}
        <div className="container">
          <MovieCard {...movieObject} addMovieList={addMovieList} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
