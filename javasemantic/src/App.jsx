import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./pages/error-page/error-page";
import LandingPage from "./pages/landing-page/landing-page";
import WelcomePage from "./pages/content/welcome-page";
import SemanticVersion from "./pages/content/semantic-version-page";
import ConventionalCommits from "./pages/content/conventional-commits";
import GitHooks from "./pages/content/git-hook-page";
import MavenSetup from "./pages/content/maven-setup-page";
import MavenConfig from "./pages/content/maven-config-page";
import GradleSetup from "./pages/content/gradle-setup-page";
import GradleConfig from "./pages/content/gradle-config-page";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/landing" component={LandingPage} />

        {/* Content Paths */}
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/background/semantic" component={SemanticVersion} />
        <Route
          exact
          path="/background/commit"
          component={ConventionalCommits}
        />
        <Route exact path="/background/githooks" component={GitHooks} />
        <Route exact path="/started/mavensetup" component={MavenSetup} />
        <Route exact path="/started/mavenconfig" component={MavenConfig} />
        <Route exact path="/started/gradlesetup" component={GradleSetup} />
        <Route exact path="/started/gradleconfig" component={GradleConfig} />

        {/* No Match */}
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
