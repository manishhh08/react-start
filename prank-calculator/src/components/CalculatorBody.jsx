import React from "react";
import ButtonComponent from "./ButtonComponent";

const CalculatorBody = () => {
  const handleOnClick = (inputData) => {
    alert("Button Clicked is :" + inputData);
  };
  return (
    <div className="btn-body">
      <ButtonComponent
        btnClasses="btn btn-c"
        content="C"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn btn-b"
        content="B"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="/"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn special-btn"
        content="*"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="7"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="8"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="9"
        clickFunction={handleOnClick}
      />

      <ButtonComponent
        btnClasses="btn special-btn"
        content="-"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="4"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="5"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="6"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn special-btn"
        content="+"
        clickFunction={handleOnClick}
      />

      <ButtonComponent
        btnClasses="btn"
        content="1"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="2"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="3"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn rowspan special-btn"
        content="="
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn colspan"
        content="0"
        clickFunction={handleOnClick}
      />
      <ButtonComponent
        btnClasses="btn"
        content="."
        clickFunction={handleOnClick}
      />
    </div>
  );
};

export default CalculatorBody;
