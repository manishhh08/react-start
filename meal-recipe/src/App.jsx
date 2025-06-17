import "./App.css";
import Form from "react-bootstrap/Form";

function App() {
  const handleOnClick = () => {
    alert("Button clicked");
  };
  return (
    <>
      <div className="wrapper bg-dark text-white p-4 rounded-5">
        <div className="container d-flex flex-column gap-5">
          <div className="row">
            <div className="col">
              <h1>Meal Recipe</h1>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-column gap-2">
              <div className="d-flex gap-4">
                <Form.Select aria-label="Default select example">
                  <option>Meal Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <button
                className="rounded-pill bg-sucess"
                onClick={handleOnClick}
              >
                Click here for recipe
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
