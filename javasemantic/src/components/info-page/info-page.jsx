import "./info-page.css";
import Sidebar from "../sidebar/sidebar";

const InfoPage = (props) => {
  return (
    <div>
      <div className="info-page">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="body-container">{props.children}</div>
      </div>
    </div>
  );
};

export default InfoPage;
