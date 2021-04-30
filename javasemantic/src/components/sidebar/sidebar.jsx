import "./sidebar.css";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useHistory } from "react-router-dom";

const Sidebar = ({ path }) => {
  const history = useHistory();
  const NoRedirectList = ["/started", "/background"];
  return (
    <>
      <Navigation
        activeItemId={path}
        onSelect={({ itemId }) => {
          if (!NoRedirectList.includes(itemId)) {
            history.push(itemId);
          }
        }}
        items={[
          {
            title: "Home",
            itemId: "/welcome",
          },
          {
            title: "Background",
            itemId: "/background",
            subNav: [
              {
                title: "Semantic Version Standard",
                itemId: "/background/semantic",
              },
              {
                title: "Conventional Commit Standard",
                itemId: "/background/commit",
              },
              {
                title: "Git Hooks",
                itemId: "/background/githooks",
              },
            ],
          },
          {
            title: "Getting Started",
            itemId: "/started",
            subNav: [
              {
                title: "Maven Setup",
                itemId: "/started/mavensetup",
              },
              {
                title: "Maven Config",
                itemId: "/started/mavenconfig",
              },
              {
                title: "Gradle Setup",
                itemId: "/started/gradlesetup",
              },
              {
                title: "Gradle Config",
                itemId: "/started/gradleconfig",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
