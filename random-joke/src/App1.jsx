import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

function App() {
  const clickFunction = () => {
    alert("button clicked");
  };
  return (
    <>
      <div className="rectangle">
        <Col xs={4} md={3}>
          <Image src="src/assets/contact1.jpg" thumbnail />
        </Col>

        <Navbar className=" bg-secondary">
          <Navbar.Brand>Joke Generator</Navbar.Brand>
        </Navbar>

        <Button variant="success" onClick={clickFunction}>
          Click Me
        </Button>
        <div className="bg-warning">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
          officiis deleniti. Nam, similique eligendi officia animi consequatur
        </div>
      </div>
    </>
  );
}

export default App;
