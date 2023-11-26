import React from "react";
import ToolBox from "../../../../atoms/toolBox/toolBox";
import { LuChevronsUpDown } from "react-icons/lu";
import { PiToggleLeftFill } from "react-icons/pi";
import { TbTicket } from "react-icons/tb";
import { LuPen } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { PiGlobeSimple } from "react-icons/pi";
import { LuArrowUpToLine } from "react-icons/lu";
import CustomDivider from "../../../../atoms/customDivider";

const LeftMenuBar = () => {
  return (
    <div className="event-options">
      <h2>Event Options</h2>
      <div className="left-menu">
        <ToolBox>
          <div className="menu-container">
            <div>
              <TbTicket  className="icon"/>
              <p>Tickets</p>
            </div>
            <div>
              <p>Free</p>
              <LuPen className="counter" />
            </div>
          </div>
        </ToolBox>
        <CustomDivider/>
        <ToolBox>
          <div className="menu-container">
            <div>
              <TbUserCheck className="icon" />
              <p>Require Approval</p>
            </div>
            <div>
              <PiToggleLeftFill className="icon" />
            </div>
          </div>
        </ToolBox>
        <CustomDivider/>
        <ToolBox>
          <div className="menu-container">
            <div>
              <LuArrowUpToLine className="icon" />
              <p>Capacity</p>
            </div>
            <div>
              <p>Unlimited</p>
              <LuPen className="counter" />
            </div>
          </div>
        </ToolBox>
        <CustomDivider/>
        <ToolBox>
          <div className="menu-container">
            <div>
              <PiGlobeSimple className="icon" />
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

export default LeftMenuBar;
