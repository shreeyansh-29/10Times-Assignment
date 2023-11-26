import { FaImage } from "react-icons/fa";
import ThemeContainer from "../../../../molecules/themeContainer";
import RightMenuBar from "./rightMenuBar";
import "./index.css"

interface Iprops {
  activeTheme: string;
  onClick: (item: string) => void;
}

const RightPanel = ({ activeTheme, onClick }: Iprops) => {
  return (
    <div className="right-panel">
      <div className="color-container">
        <h1>
          YOU ARE <em>INVITED</em>
        </h1>
        <div>
          <FaImage className="icon" />
        </div>
      </div>
      <div className="theme">
        <h2>Theme</h2>
        <ThemeContainer activeTheme={activeTheme} onClick={onClick} />
      </div>
      <RightMenuBar activeTheme={activeTheme} />
    </div>
  );
};

export default RightPanel;
