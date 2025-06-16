import React from "react";
import ButtonComponent from "./ButtonComponent";

const CalculatorBody = (props) => {
  const operators = ["/", "*", "-", "+"];
  const accpetedKeys = "1234567890CB=";
  let lastOperator = "+";

  let { setResult, result } = props;
  const total = () => {
    let ttl = eval(result);
    let resultstr = "";

    //check if ttl is not a number

    if (isNaN(ttl) || !isFinite(ttl) || ttl === 0) {
      resultstr = "";
    } else {
      resultstr = ttl;
    }
    setResult(resultstr);
  };

  const handleOnClick = (inputData) => {
    //alert("Button Clicked is :" + inputData);

    // console.log(inputData);

    // setResult(inputData);

    // return;
    //clear output using C
    if (inputData === "C") {
      setResult("0.0");
      return;
    }
    if (inputData === "B") {
      setResult(result.slice(0, -1));
      //write if case for checking the 0.0 value
      return;
    }

    // if . clicked

    // if operators clicked

    //evaluate using =
    if (inputData == "=") {
      const lastChar = result[result.length - 1];
      if (!operators.includes(lastChar)) {
        total();
      }
      return;
    }

    setResult((parseInt(result) == 0 ? "" : result) + inputData);
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
