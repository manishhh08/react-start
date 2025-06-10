import Output from "./components/Output.jsx";
import CalculatorBody from "./components/CalculatorBody.jsx";
import "./main.css";
import { useState } from "react";
function App() {
  let [result, setResult] = useState(0);
  const updateResult = () => {
    setResult = result + 1;
  };
  return (
    <>
      <div className="wrapper">
        <Output outputData={result} />
        <CalculatorBody setResult={setResult} result={result} />
      </div>
    </>
  );
}

export default App;
