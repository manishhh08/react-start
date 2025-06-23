import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  let skillArray = [
    { title: "HTML", skillClass: "fa-brands fa-html5" },
    { title: "CSS", skillClass: "fa-brands fa-css3-alt" },
    { title: "JavaScript", skillClass: "fa-brands fa-js" },
    { title: "Github", skillClass: "fa-brands fa-github" },
    { title: "Figma", skillClass: "fa-brands fa-figma" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skill_header">Skills</div>
      <div className="skill_bar">
        {skillArray.map((item) => (
          <SkillCard title={item.title} skillClass={item.skillClass} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
