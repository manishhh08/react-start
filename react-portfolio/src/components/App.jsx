import "../App.css";
// import DarkMode from "./Darkmode";
import Navigation_menu from "./Navigation_menu";
import HeroSection from "./HeroSection";
import Details from "./Details";

function App() {
  return (
    <>
      {/* <DarkMode /> */}

      <div className="wrapper">
        <label htmlFor="darkmode" id="darkmodelabel">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navigation_menu />
        <HeroSection />
        <Details />
      </div>
    </>
  );
}

export default App;
