import "./landing-page.css";
import { Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  const goToError = () => {
    history.push("/404");
  };

  const goToInfo = () => {
    history.push("/welcome");
  };

  return (
    <div className="landing-page-parent">
      <div className="landing-page">
        <Image src={process.env.PUBLIC_URL + "/img/monke.png"} />
        <h1>Java Semantic</h1>
        <p>
          Automatically version a Maven or Gradle project using conventional
          commits
        </p>
        <div className="landing-buttons">
          <Button className="primary-button" onClick={goToInfo}>
            Get Started
          </Button>
          <Button
            className="secondary-button"
            href="https://github.com/javasemantic"
            target="_blank"
          >
            GitHub
          </Button>
        </div>
      </div>
      <p className="funny-link" onClick={goToError}>
        seek death
      </p>
    </div>
  );
};

export default LandingPage;
