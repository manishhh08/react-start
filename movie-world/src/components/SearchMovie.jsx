import axios from "axios";
import { useRef } from "react";
const apikey = import.meta.env.VITE_API_KEY;

const SearchMovie = ({ setMovieObject }) => {
  const searchRef = useRef(null);
  const handleOnSearch = async () => {
    // alert("button clicked");
    console.log(apikey);
    let search = searchRef.current.value;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apikey}&t=${search}`
    );
    console.log(response.data);
    if (response.data) {
      let movieObject = {
        title: response.data.Title,
        detail: response.data.Plot,
        image: response.data.Poster,
      };
      setMovieObject(movieObject);
    }
  };
  return (
    <div className="search">
      <input type="text" placeholder="Search movie..." ref={searchRef} />
      <button onClick={handleOnSearch}>Search me</button>
    </div>
  );
};

export default SearchMovie;
