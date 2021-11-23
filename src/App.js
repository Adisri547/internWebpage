import logo from './logo.svg';
import './App.css';
import { Row, Container, Col } from "react-bootstrap";
import Im1 from "../src/images/aditya.jpg"
import Im2 from "../src/images/soham.jpeg"
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <p>
            <img src={Im1} width="200px"  height="200px"/>
            <img src={Im2} width="200px"  height="200px"/>


            
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
