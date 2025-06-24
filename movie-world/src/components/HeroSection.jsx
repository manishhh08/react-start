import React, { useState } from "react";
import SearchMovie from "./SearchMovie";
import MovieCard from "./MovieCard";

import image from "../assets/image.jpg";

const HeroSection = () => {
  const [movieObject, setMovieObject] = useState({
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
          <MovieCard {...movieObject} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
