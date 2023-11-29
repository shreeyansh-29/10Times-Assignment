import {LuChevronsUpDown} from "react-icons/lu";
import ToolBox from "../../../../../atoms/toolBox/toolBox";
import CustomDivider from "../../../../../atoms/customDivider";
import {themeStateType} from "..";
import "./index.css";

interface Iprops {
  themeState: themeStateType;
}

const RightMenu = ({themeState}: Iprops) => {
  return (
    <div className="right-menu">
      <ToolBox>
        <div className="right-menu-container">
          <div>
            <div
              className="color-circle"
              style={{
                backgroundColor: themeState.activeThemeColor
                  ? themeState.activeThemeColor
                  : "",
              }}
            />
            <p>Color</p>
          </div>
          <div>
            <p>{themeState.activeThemeName}</p>
            <LuChevronsUpDown className="counter" />
          </div>
        </div>
      </ToolBox>
      <CustomDivider />
      <ToolBox>
        <div className="right-menu-container">
          <div>
            <h3>Ag</h3>
            <p>Typeface</p>
          </div>
          <div>
            <p>{themeState.activeThemeFont}</p>
            <LuChevronsUpDown className="counter" />
          </div>
        </div>
      </ToolBox>
    </div>
  );
};

export default RightMenu;
