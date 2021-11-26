import "./App.css";
import { Row, Container, Col } from "react-bootstrap";
import Adi from "../src/images/aditya.jpg";
import Soh from "../src/images/soham.jpeg";
import Ash from "../src/images/ashish.jpg";
import Sid from "../src/images/sid.jpg";
import Shrey from "../src/images/SHREYANSH.jpeg";
import Git from "../src/Social Icons/Social Icons/Github.svg";
import Link from "../src/Social Icons/Social Icons/Linkedin.svg";
import Insta from "../src/Social Icons/Social Icons/Instagram.svg";
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
                  <a href="https://github.com/Adisri547">
                    <img src={Git} height="35px" width="35px"/>
                  </a>
                  <a href="https://www.linkedin.com/in/aditya-srivastav-308751157/">
                    <img src={Link} height="35px" width="35px"/>
                  </a>
                  <a href="https://www.instagram.com/adi.sri547/">
                    <img src={Insta} height="35px" width="35px"/>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div class="image">
              <img class="image__img" src={Soh} />
              <div class="image__overlay image__overlay--primary">
                <div class="image__title">Soham</div>
                <div class="icon">
                <img src={Git} height="35px" width="35px"/>
                <img src={Link} height="35px" width="35px" />
                <img src={Insta} height="35px" width="35px" />
              </div>
            </div>
            </div>
          </Col>
          <div class="image">
            <img class="image__img" src={Ash} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Ashish Mishra</div>
              <div class="icon">
              <a href="https://github.com/Ash1912">
                    <img src={Git} height="35px" width="35px"/>
                  </a>
                  <a href="https://www.linkedin.com/in/ashish-kumar-mishra-616321206">
                    <img src={Link} height="35px" width="35px"/>
                  </a>
                  <a href="https://instagram.com/a_s_h__1912?utm_medium=copy_link">
                    <img src={Insta} height="35px" width="35px"/>
                  </a>
            </div>
          </div>
          </div>
        </Row>
        <Row>
          <div class="image">
            <img class="image__img" src={Sid} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Siddhant Banerjee</div>
              <div class="icon">
              <img src={Git} height="35px" width="35px"/>
              <img src={Link} height="35px" width="35px"/>
              <img src={Insta} height="35px" width="35px"/>
            </div>
          </div>
          </div>
          <div class="image">
            <img class="image__img" src={Shrey} />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Shreyansh Rai</div>
              <div class="icon">
              <img src={Git} height="35px" width="35px"/>
              <img src={Link} height="35px" width="35px"/>
              <img src={Insta} height="35px" width="35px"/>
            </div>
          </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
