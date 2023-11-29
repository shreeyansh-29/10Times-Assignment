import ToolBox from "../../../../../../atoms/toolBox/toolBox";
import {LuChevronsUpDown} from "react-icons/lu";
import {PiToggleLeftFill} from "react-icons/pi";
import {TbTicket} from "react-icons/tb";
import {LuPen} from "react-icons/lu";
import {TbUserCheck} from "react-icons/tb";
import {PiGlobeSimple} from "react-icons/pi";
import {LuArrowUpToLine} from "react-icons/lu";
import CustomDivider from "../../../../../../atoms/customDivider";
import "./index.css";

const EventOptions = () => {
  return (
    <div className="event-options">
      <h2>Event Options</h2>
      <div className="left-menu">
        <ToolBox>
          <div className="left-menu-container">
            <div>
              <TbTicket className="left-icon" />
              <p>Tickets</p>
            </div>
            <div>
              <p>Free</p>
              <LuPen className="counter" />
            </div>
          </div>
        </ToolBox>
        <CustomDivider />
        <ToolBox>
          <div className="left-menu-container">
            <div>
              <TbUserCheck className="left-icon" />
              <p>Require Approval</p>
            </div>
            <div>
              <PiToggleLeftFill className="counter" />
            </div>
          </div>
        </ToolBox>
        <CustomDivider />
        <ToolBox>
          <div className="left-menu-container">
            <div>
              <LuArrowUpToLine className="left-icon" />
              <p>Capacity</p>
            </div>
            <div>
              <p>Unlimited</p>
              <LuPen className="counter" />
            </div>
          </div>
        </ToolBox>
        <CustomDivider />
        <ToolBox>
          <div className="left-menu-container">
            <div>
              <PiGlobeSimple className="left-icon" />
              <p>Visibility</p>
            </div>
            <div>
              <p>Public</p>
              <LuChevronsUpDown className="counter" />
            </div>
          </div>
        </ToolBox>
      </div>
    </div>
  );
};

export default EventOptions;
