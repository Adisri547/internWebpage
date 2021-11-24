import logo from "./logo.svg";
import "./App.css";
import { Row, Container, Col } from "react-bootstrap";
import Adi from "../src/images/aditya.jpg";
import Soh from "../src/images/soham.jpeg";
import Ash from "../src/images/ashish.jpg";
import Sid from "../src/images/sid.jpg";
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <img
            src={Adi}
            width="200px"
            height="200px"
           
          />

          <img
            src={Soh}
            width="200px"
            height="200px"
           
          />
           <img src={Ash} width="200px" height="200px" />
        </Row>
        <Row>
         
          <img src={Sid} width="200px" height="200px" />
        </Row>
      </Container>
    </div>
  );
}

export default App;
