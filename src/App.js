import "./App.css";
import { Row, Container, Col } from "react-bootstrap";
import Adi from "../src/images/aditya.jpg";
import Soh from "../src/images/soham.jpeg";
import Ash from "../src/images/ashish.jpg";
import Sid from "../src/images/sid.jpg";
import Shrey from "../src/images/SHREYANSH.jpeg";
import Ico from "../src/Social Icons/Social Icons/Github.svg"
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <div class="image">
              <img class="image__img" src={Adi} />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Aditya Srivastav</div>
                <div class="icon"> 
                <img src={Ico} />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="image">
              <img class="image__img" src={Soh} />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Soham Dutta</div>
                <img src={Ico} />
              </div>
            </div>
          </Col>
          <div class="image">
            <img class="image__img" src={Ash} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Ashish M</div>
              <img src={Ico} />
            </div>
          </div>
        </Row>
        <Row>
          <div class="image">
            <img class="image__img" src={Sid} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Siddhant Banerjee</div>
              <img src={Ico} />
            </div>
          </div>
          <div class="image">
            <img class="image__img" src={Shrey} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Shreyansh Rai</div>
              <img src={Ico} />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
