import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import ToolBox from "../../../../atoms/toolBox/toolBox";
import { themeColor } from "../../../../../constants";
import CustomDivider from "../../../../atoms/customDivider";

interface Iprops {
  activeTheme: string;
}

const RightMenuBar = ({activeTheme} : Iprops) => {
  return (
    <div className="right-menu">
      <ToolBox>
        <div className="menu-container">
          <div>
            <div className="color-circle" />
            <p>Color</p>
          </div>
          <div>
            <p>Gray</p>
            <LuChevronsUpDown className="counter" />
          </div>
        </div>
      </ToolBox>
      <CustomDivider/>
      <ToolBox>
        <div className="menu-container">
          <div>
            <h3>Ag</h3>
            <p>Typeface</p>
          </div>
          <div>
            <p>Default</p>
            <LuChevronsUpDown className="counter" />
          </div>
        </div>
      </ToolBox>
    </div>
  );
};

export default RightMenuBar;
