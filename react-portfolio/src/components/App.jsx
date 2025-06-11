import "../App.css";
import DarkMode from "./Darkmode";
import Navigation_menu from "./Navigation_menu";
import HeroSection from "./HeroSection";

function App() {
  return (
    <>
      <DarkMode />

      <div className="wrapper">
        <label for="darkmode" id="darkmodelabel">
          <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
        </label>
        <Navigation_menu />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
