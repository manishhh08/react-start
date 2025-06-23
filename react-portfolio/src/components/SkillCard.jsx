import React from "react";

const SkillCard = ({ title, skillClass }) => {
  return (
    <>
      <div className="skill-card">
        <span>
          <i className={skillClass}></i>
        </span>
        <span>{title}</span>
      </div>
    </>
  );
};

export default SkillCard;
