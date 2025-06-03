import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomComponent from "./CustomComponent";
import UniqueComponent from "./UniqueComponent";
import MainComponent from "./MainComponent";

function App() {
  let customVariable = 111111111;
  return (
    <>
      <div className="wrapper">
        <div>Test</div>
        <h1 style={{ backgroundColor: "grey", color: "green" }}>
          Main component
        </h1>
        {customVariable}
        <MainComponent />
        <h1 style={{ backgroundColor: "red", color: "black" }}>
          Custom Component
        </h1>
        <CustomComponent />
        <h2 style={{ backgroundColor: "yellow", color: "brown" }}>
          Manish Introduction
        </h2>
        <UniqueComponent />
        <CustomComponent />
      </div>
    </>
  );
}

export default App;
