import "./App.css";
import { Row, Container, Col } from "react-bootstrap";
import Adi from "../src/images/aditya.jpg";
import Soh from "../src/images/soham.jpg";
import Ash from "../src/images/ashish.jpg";
import Sid from "../src/images/sidNew.jpg";
import Shrey from "../src/images/SHREYANSH.jpeg";
import Git from "../src/Social Icons/Social Icons/Github.svg";
import Link from "../src/Social Icons/Social Icons/Linkedin.svg";
import Insta from "../src/Social Icons/Social Icons/Instagram.svg";
import Twit from "../src/Social Icons/Social Icons/Twitter.svg";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="Row">
          <div className="text t1">
            <p>
              The <br /> learners of...
            </p>
          </div>

          <div className="image">
            <img className="image__img" src={Adi} alt="photo" />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">
                Aditya Srivastav <p className="domain">Designation: Learner</p>
              </div>
              <br />
              <div className="icon">
                <a href="https://github.com/Adisri547" target="_blank">
                  <img src={Git} height="35px" width="35px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-srivastav-308751157/"
                  target="_blank"
                >
                  <img src={Link} height="35px" width="35px" />
                </a>
                <a href="https://www.instagram.com/adi.sri547/" target="_blank">
                  <img src={Insta} height="35px" width="35px" />
                </a>
              </div>
            </div>
          </div>

          <div className="text t2">
            <p>
              ..the project, <br /> Qode...
            </p>
          </div>

          <div className="image">
            <img className="image__img" src={Soh} alt="photo" />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Soham Dutta<p className="domain">Designation: Learner</p></div>
              <br />
              <div className="icon">
                <a href=" https://github.com/shm-dsgn" target="_blank">
                  <img src={Git} height="35px" width="35px" />
                </a>
                <a href="https://www.linkedin.com/in/shm-dsgn" target="_blank">
                  <img src={Link} height="35px" width="35px" />
                </a>
                <a href=" https://www.twitter.com/shm_dsgn/" target="_blank">
                  <img src={Twit} height="35px" width="35px" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Row">
          <div className="image">
            <img className="image__img" src={Ash} alt="photo" />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Ashish Kumar Mishra<p className="domain">Designation: Learner</p></div>
              <br />
              <div className="icon">
                <a href="https://github.com/Ash1912" target="_blank">
                  <img src={Git} height="35px" width="35px" />
                </a>
                <a href="https://www.linkedin.com/in/ashish-kumar-mishra-616321206" target="_blank">
                  <img src={Link} height="35px" width="35px" />
                </a>
                <a href="https://instagram.com/a_s_h__1912?utm_medium=copy_link" target="_blank">
                  <img src={Insta} height="35px" width="35px" />
                </a>
              </div>
            </div>
          </div>

          <div className="text t3">
            <p>
              ..from <br />
              MSC KIIT
              <br /> Project Wing.
            </p>
          </div>

          <div className="image">
            <img className="image__img" src={Sid} alt="photo" />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Siddhant Banerjee<p className="domain">Designation: Learner</p></div>
              <br />
              <div className="icon">
                <a href=" https://github.com/Sidoryx" target="_blank">
                  <img src={Git} height="35px" width="35px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sidbanerjee510/"
                  target="_blank"
                >
                  <img src={Link} height="35px" width="35px" />
                </a>
                <a href="https://twitter.com/sidstwt" target="_blank">
                  <img src={Twit} height="35px" width="35px" />
                </a>
              </div>
            </div>
          </div>

          <div className="image">
            <img className="image__img" src={Shrey} alt="photo" />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Shreyansh Rai<p className="domain">Designation: Learner</p></div>
              <br />
              <div className="icon">
                <a href="https://github.com/shreyanshrai2401" target="_blank">
                  <img src={Git} height="35px" width="35px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreyansh-rai-0275221bb"
                  target="_blank"
                >
                  <img src={Link} height="35px" width="35px" />
                </a>
                <a
                  href="https://www.instagram.com/shreyanshrai2401/"
                  target="_blank"
                >
                  <img src={Insta} height="35px" width="35px" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Footer">
          <p>Made with ❤️, ☕ and a bit of laziness.</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
