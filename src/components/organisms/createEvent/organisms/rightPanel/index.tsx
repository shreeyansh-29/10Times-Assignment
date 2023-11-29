import {useState} from "react";
import {FaImage} from "react-icons/fa";
import ThemeContainer from "../../../../molecules/themeContainer";
import RightMenu from "./organisms/rightMenu/index";
import "./index.css";

export interface itemType {
  backgroundColor: string;
  themeName: string;
  name: string;
  font: string;
}

export interface themeStateType {
  activeTheme: string;
  activeThemeColor: string;
  activeThemeName: string;
  activeThemeFont: string;
}

const initialThemeState: themeStateType = {
  activeTheme: "",
  activeThemeColor: "",
  activeThemeName: "Gray",
  activeThemeFont: "Default",
};

const RightPanel = () => {
  const [themeState, setThemeState] =
    useState<themeStateType>(initialThemeState);

  const handleClick = (item: itemType) => {
    setThemeState({
      activeTheme: item.themeName,
      activeThemeColor: item.backgroundColor,
      activeThemeName: item.name,
      activeThemeFont: item.font,
    });
  };

  return (
    <div className="right-panel">
      <div
        className="color-container"
        style={{
          backgroundColor: themeState.activeThemeColor
            ? themeState.activeThemeColor
            : "",
        }}
      >
        <h1>
          YOU ARE <em>INVITED</em>
        </h1>
        <div className="upload-image">
          <FaImage className="icon" />
        </div>
      </div>
      <div className="theme">
        <h2>Theme</h2>
        <ThemeContainer
          activeTheme={themeState.activeTheme}
          onClick={handleClick}
        />
      </div>
      <RightMenu themeState={themeState} />
    </div>
  );
};

export default RightPanel;
