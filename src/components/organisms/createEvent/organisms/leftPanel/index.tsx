import { FaAngleDown } from "react-icons/fa";
import CustomButton from "../../../../atoms/customButton";
import "./index.css";
import LeftMenuBar from "./leftMenuBar";
import EventDetails from "./eventDetails";

const customButtonStyles = {
  backgroundColor: '#333537',
  margin : '',
  padding: '16px 80px',
}

const LeftPanel = () => {
  return (
    <>
      <div className="left-panel">
        <div className="category">
          <span />
          <div className="first-container">
            <p>Create under</p>
            <h5>Personal Calendar</h5>
          </div>
          <FaAngleDown className="dropdown-icon" />
        </div>

        <div className="inputField">
          <input autoFocus={true} placeholder="Event Name" />
        </div>
        <EventDetails />
        <LeftMenuBar />
        <CustomButton name="Create Event" onClick={() => {}} styles={customButtonStyles}/>
      </div>
    </>
  );
};

export default LeftPanel;
