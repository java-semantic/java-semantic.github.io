import "./error-page.css";
import { Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();
  const goToMainPage = () => {
    history.push("/");
  };
  return (
    <div className="error-page">
      <div className="error-container">
        <h1>
          <b>404 ERROR</b>
        </h1>
        <Image src={process.env.PUBLIC_URL + "/img/worf.png"} />
        <p>My Bat&apos;leth kills all the threats to Picard.</p>
        <p>My Bat&apos;leth is better than yours.</p>
        <p>Now flee back to safety, small one.</p>
        <Button className="primary-button" onClick={goToMainPage}>
          Flee
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
