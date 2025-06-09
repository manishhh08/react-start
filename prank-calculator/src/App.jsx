import Result from "./componens/Result.jsx";
function App() {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="output" id="ouput">
            0.00
          </div>
          <div className="btn-body">
            <div className="btn btn-c">C</div>
            <div className="btn btn-b">B</div>
            <div className="btn">/</div>
            <div className="btn special-btn">*</div>
            <div className="btn">7</div>
            <div className="btn">8</div>
            <div className="btn">9</div>
            <div className="btn special-btn">-</div>
            <div className="btn">4</div>
            <div className="btn">5</div>
            <div className="btn">6</div>
            <div className="btn special-btn">+</div>
            <div className="btn">1</div>
            <div className="btn">2</div>
            <div className="btn">3</div>
            <div className="btn rowspan special-btn"> =</div>

            <div className="btn colspan">0</div>
            <div className="btn">.</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
