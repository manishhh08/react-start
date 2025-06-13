import "../App.css";
// import DarkMode from "./Darkmode";
import Navigation_menu from "./Navigation_menu";
import HeroSection from "./HeroSection";
import Details from "./Details";
import Skills from "./Skills";
import MyProject from "./MyProject";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

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
        <Skills />
        <MyProject />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
