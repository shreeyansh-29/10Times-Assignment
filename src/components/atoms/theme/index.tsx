import {itemType} from "../../organisms/createEvent/organisms/rightPanel/index";
import "./index.css";

interface Iprops {
  item: itemType;
  activeTheme: string;
  onClick: (item: itemType) => void;
}

const ThemeCard = (props: Iprops) => {
  const {item, activeTheme, onClick} = props;

  return (
    <div className="themeCard" onClick={() => onClick(item)}>
      <div
        className="innerContainer"
        style={
          activeTheme === item.themeName
            ? {borderColor: "#000", backgroundColor: item.backgroundColor}
            : {backgroundColor: item.backgroundColor}
        }
      >
        <div className="content">
          <h3>Title</h3>
          <span className="span1" />
          <span className="span2" />
        </div>
      </div>

      <p style={activeTheme === item.themeName ? {color: "#000"} : {}}>
        {item.themeName}
      </p>
    </div>
  );
};

export default ThemeCard;
