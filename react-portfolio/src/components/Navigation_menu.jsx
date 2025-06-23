import { Link } from "react-router";
import companyLogo from "../assets/logo.png";
function Navigation_menu() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src={companyLogo} alt="company logo" />
          </div>

          <input type="checkbox" id="hamburgerMenu" />
          <div className="menu">
            <div>
              <a href="/">
                <i className="fa-solid fa-house-chimney-crack"></i> HOME
              </a>
            </div>

            <div>
              <a href="/skills">
                <i className="fa-solid fa-gear"></i> SKILLS
              </a>
            </div>

            <div>
              <a href="/projects">
                <i className="fas fa-project-diagram"></i> PROJECTS
              </a>
            </div>

            <div>
              <a href="/about">
                <i className="fa-solid fa-circle-info"></i> ABOUT
              </a>
            </div>

            <div>
              <a href="/contact">
                {" "}
                <i className="fa-solid fa-phone"></i> CONTACT
              </a>
            </div>
          </div>
          <label htmlFor="hamburgerMenu" test="hamburg">
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>
      </header>
    </>
  );
}
export default Navigation_menu;
