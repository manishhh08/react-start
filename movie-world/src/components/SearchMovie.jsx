import axios from "axios";
import { useEffect, useRef } from "react";
const apikey = import.meta.env.VITE_API_KEY;

const SearchMovie = ({ setMovieObject }) => {
  const searchRef = useRef(null);
  const movieSearch = async (s) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apikey}&t=${s}`
    );
    if (response.data) {
      let temObject = {
        title: response.data.Title,
        detail: response.data.Plot,
        image: response.data.Poster,
        imdbID: response.data.imdbID,
      };
      setMovieObject(temObject);
    }
  };
  const handleOnSearch = async () => {
    let searchItem = searchRef.current.value;
    movieSearch(searchItem);
  };
  useEffect(() => {
    movieSearch("Crows Zero");
  }, []);
  return (
    <div className="search">
      <input type="text" placeholder="Search movie..." ref={searchRef} />
      <button onClick={handleOnSearch}>Search me</button>
    </div>
  );
};

export default SearchMovie;
