import React from "react";
import profileImage from "../assets/manish.jpg";

const AboutMe = () => {
  return (
    <section className="aboutme" id="about">
      <div className="grid_about">
        <div className="left_flex">
          <img src={profileImage} alt="profile image manish" />
        </div>
        <div className="right_flex">
          <div className="aboutheader">
            <div style={{ borderBottom: "1px orange solid" }}>About Me</div>
          </div>
          <div className="aboutdetails">
            <span>
              <b>Manish Lama</b>
            </span>{" "}
            <br />
            <span>
              Hi, I am Manish and I am enrolled to fullstack development course
              where I am currently learning the basics of web developement. The
              following course includes basics of programming such as HTML and
              CSS and after learning about them I started learning and coding
              for the front end of the website using Javascript. Next step will
              be learning React which is a framework for Javascript and will
              conclude the course with back end development which will use
              Nodejs.
            </span>
            <br />
            <span>
              <b>Sydney,Australia</b>
            </span>
            <span>
              <div className="interest">
                <b>Interest</b>
              </div>
              <div className="interestsports">
                <span>Basketball</span>
                <span>Console Games</span>
                <span>Swimming</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
