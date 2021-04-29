import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./pages/error-page/error-page";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/landing" component={LandingPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
