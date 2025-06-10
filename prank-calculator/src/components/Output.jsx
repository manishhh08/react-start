import React from "react";

const Output = (props) => {
  let { outputData } = props;
  return (
    <div className="output" id="ouput">
      {outputData}
    </div>
  );
};

export default Output;
