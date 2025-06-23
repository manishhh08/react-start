import "./App.css";
// import DarkMode from "./Darkmode";
import Navigation_menu from "./components/Navigation_menu";
import HeroSection from "./components/HeroSection";
import Details from "./components/Details";
import Skills from "./components/Skills";
import MyProject from "./components/MyProject";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router";
import Layout1 from "./components/layout/Layout1";
import Layout2 from "./components/layout/Layout2";

function App() {
  return (
    <div className="wrapper">
      <label htmlFor="darkmode" id="darkmodelabel">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <Routes>
        {/* outlet method */}
        <Route path="/" element={<Layout1 />}>
          <Route index element={<HeroSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<MyProject />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* props.children method */}
        {/* <Route
          path="/about"
          element={
            <Layout2>
              <AboutMe />
            </Layout2>
          }
        /> */}
        {/* Section  */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
