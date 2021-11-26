import "./App.css";
import { Row, Container, Col } from "react-bootstrap";
import Adi from "../src/images/aditya.jpg";
import Soh from "../src/images/soham.jpeg";
import Ash from "../src/images/ashish.jpg";
import Sid from "../src/images/sid.jpg";
import Shrey from "../src/images/SHREYANSH.jpeg";
<<<<<<< HEAD
=======
import Git from "../src/Social Icons/Social Icons/Github.svg"
import Link from "../src/Social Icons/Social Icons/Linkedin.svg"
import Insta from "../src/Social Icons/Social Icons/Instagram.svg"

>>>>>>> af0c319d9134ebcc759f7710f1ae14702a6e90f7
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

<<<<<<< HEAD
=======
                <div class="icon"> 
                <img src={Git} />
                <img src={Link} />
                <img src={Insta} />

                </div>
>>>>>>> af0c319d9134ebcc759f7710f1ae14702a6e90f7
              </div>
            </div>
          </Col>
          <Col>
            <div class="image">
              <img class="image__img" src={Soh} />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Soham</div>
                <img src={Git} />
                <img src={Link} />
                <img src={Insta} />
              </div>
            </div>
          </Col>
          <div class="image">
            <img class="image__img" src={Ash} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Ashish Mishra</div>
              <img src={Git} />
                <img src={Link} />
                <img src={Insta} />
            </div>
          </div>
        </Row>
        <Row>
          <div class="image">
            <img class="image__img" src={Sid} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Siddhant Banerjee</div>
              <img src={Git} />
                <img src={Link} />
                <img src={Insta} />
            </div>
          </div>
          <div class="image">
            <img class="image__img" src={Shrey} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Shreyansh Rai</div>
              <img src={Git} />
                <img src={Link} />
                <img src={Insta} />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
