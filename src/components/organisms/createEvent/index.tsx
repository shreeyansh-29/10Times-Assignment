import LeftPanel from "./organisms/leftPanel/index";
import RightPanel from "./organisms/rightPanel/index";
import {withRouter} from "react-router-dom";
import "./index.css";

const CreateEvent = () => {
  return (
    <div className="container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default withRouter(CreateEvent);
