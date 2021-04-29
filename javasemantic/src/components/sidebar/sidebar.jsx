import "./sidebar.css";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const NoRedirectList = ["/started", "/analysis"];
  return (
    <>
      <Navigation
        activeItemId="/welcome"
        onSelect={({ itemId }) => {
          if (!NoRedirectList.includes(itemId)) history.push(itemId);
        }}
        items={[
          {
            title: "Java Semantic",
            itemId: "/welcome",
          },
          {
            title: "Getting Started",
            itemId: "/started",
            subNav: [
              {
                title: "Maven",
                itemId: "/started/maven",
              },
              {
                title: "Gradle",
                itemId: "/started/gradle",
              },
            ],
          },
          {
            title: "Analysis",
            itemId: "/analysis",
            subNav: [
              {
                title: "Version Manager",
                itemId: "/analysis/version",
              },
              {
                title: "Commit Engine",
                itemId: "/analysis/commitengine",
              },
              {
                title: "Analysis Degenetor",
                itemId: "/analysis/analysisdegenetor",
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
