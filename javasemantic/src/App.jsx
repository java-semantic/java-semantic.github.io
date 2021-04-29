import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./pages/error-page/error-page";
import LandingPage from "./pages/landing-page/landing-page";
import WelcomePage from "./pages/content/welcome-page";
import MavenStartedPage from "./pages/content/maven-started-page";
import GradleStartedPage from "./pages/content/gradle-started-page";
import VersionManager from "./pages/content/version-manager-page";
import CommitEngine from "./pages/content/commit-engine-page";
import Degenerator from "./pages/content/degenerator-page";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/landing" component={LandingPage} />

        {/* Content Paths */}
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/started/maven" component={MavenStartedPage} />
        <Route exact path="/started/gradle" component={GradleStartedPage} />
        <Route exact path="/analysis/version" component={VersionManager} />
        <Route exact path="/analysis/commitengine" component={CommitEngine} />
        <Route
          exact
          path="/analysis/analysisdegenetor"
          component={Degenerator}
        />

        {/* No Match */}
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
