import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="alllinks">
        <div className="links">
          <b>Links</b> <br />
          <span>
            <a href="#home">Home</a>
          </span>
          <span>
            <a href="#skills">Skills</a>
          </span>
          <span>
            <a href="#projects">Project</a>
          </span>
          <span>
            <a href="#contact">Contact</a>
          </span>
        </div>
        <div className="sociallinks">
          <b>Social Links</b> <br />
          <span>
            <a href="https://www.linkedin.com/in/manishlama99/" target="_blank">
              LinkedIn
            </a>
          </span>
          <span>
            <a href="https://github.com/manishhh08" target="_blank">
              Github
            </a>
          </span>
          <span>
            <a href="#about">Facebook</a>
          </span>
          <span>
            <a href="#contact">Youtube</a>
          </span>
        </div>
      </div>
      <span>
        ©<b>Manish Official Website</b>{" "}
      </span>
      <span>All copyright reserved by Manish!!!!</span>
    </footer>
  );
};

export default Footer;
