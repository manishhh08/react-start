import React from "react";

const ButtonComponent = (props) => {
  let { btnClasses, content, clickFunction } = props;
  return (
    <div
      className={btnClasses}
      onClick={() => {
        clickFunction(content);
      }}
    >
      {content}
    </div>
  );
};

export default ButtonComponent;
