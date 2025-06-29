import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SavedMovieCard from "./components/SavedMovieCard";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieList = (movie) => {
    let findMovie = movieList.find((item) => item.imdbID == movie.imdbID);
    if (!findMovie) {
      let tempMovieList = [...movieList];
      tempMovieList.push(movie);
      setMovieList(tempMovieList);
    }
  };
  return (
    <>
      <div className="wrapper">
        {/* title section */}
        <Header />
        {/* hero section start */}
        <HeroSection addMovieList={addMovieList} />
        {/* filter button and saved list */}
        <SavedMovieCard movieList={movieList} />
      </div>
    </>
  );
}

export default App;
