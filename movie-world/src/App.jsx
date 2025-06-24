import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SavedMovieCard from "./components/SavedMovieCard";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* title section */}
        <Header />
        {/* hero section start */}
        <HeroSection />
        {/* filter button and saved list */}
        <SavedMovieCard />
      </div>
    </>
  );
}

export default App;
