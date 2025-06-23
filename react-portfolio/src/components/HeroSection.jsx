import React from "react";
import profileImage from "../assets/manish.jpg";
import Navigation_menu from "./Navigation_menu";

const HeroSection = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi I'm <span>Manish</span>
          </div>
          <div className="tag">Soft. Engineer</div>

          <div>
            {/* <a href="./text.txt" download>  */}
            <button>
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
        <div className="right flex">
          <img
            src={profileImage}
            alt="manish profile"
            style={{ objectFit: "cover", height: "300px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
