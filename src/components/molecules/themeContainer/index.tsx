import { useState } from "react";
import { themeColor } from "../../../constants";
import Theme from "../../atoms/theme";
import "./index.css";

export interface itemType {
  backgroundColor: string;
  themeName: string;
}

interface Iprops {
  activeTheme: string;
  onClick: (item: string) => void;
}

const ThemeContainer = ({ activeTheme, onClick }: Iprops) => {
  
  return (
    <div className="themeContainer">
      {themeColor.map((item: itemType) => (
        <Theme item={item} activeTheme={activeTheme} key={item.themeName} onClick={onClick} />
      ))}
    </div>
  );
};

export default ThemeContainer;
