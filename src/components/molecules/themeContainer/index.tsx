import {themeColor} from "../../../constants";
import {itemType} from "../../organisms/createEvent/organisms/rightPanel/index";
import ThemeCard from "../../atoms/themeCard/index";
import "./index.css";

interface Iprops {
  activeTheme: string;
  onClick: (item: itemType) => void;
}

const ThemeContainer = ({activeTheme, onClick}: Iprops) => {
  return (
    <div className="themeContainer">
      {themeColor.map((item: itemType) => (
        <ThemeCard
          item={item}
          activeTheme={activeTheme}
          key={item.themeName}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default ThemeContainer;
