import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skill_header">Skills</div>
      <div className="skill_bar">
        <div className="firstskill">
          <span>
            <i className="fa-brands fa-html5"></i>
          </span>
          <span>HTML</span>
        </div>
        <div className="secondskill">
          <span>
            <i className="fa-brands fa-css3-alt"></i>
          </span>
          <span>CSS</span>
        </div>
        <div className="thirdskill">
          <span>
            <i className="fa-brands fa-js"></i>
          </span>
          <span>Javascript</span>
        </div>
        <div className="fourthskill">
          <span>
            <i className="fa-brands fa-github"></i>
          </span>
          <span>Github</span>
        </div>
        <div className="fifthskill">
          <span>
            <i className="fa-brands fa-figma"></i>
          </span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
