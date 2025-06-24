import React from "react";
import SearchMovie from "./SearchMovie";
import MovieCard from "./MovieCard";

const HeroSection = () => {
  return (
    <>
      <div className="herosection">
        <SearchMovie />
        {/* searched movie card */}
        <div className="container">
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
