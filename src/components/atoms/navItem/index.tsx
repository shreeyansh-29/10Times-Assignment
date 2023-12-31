import { itemType } from "../../organisms/navbar";
import "./index.css";

interface Iprops {
  item: itemType;
}

const NavItem = (props: Iprops) => {
  const { item } = props;
  return (
    <div className="navItem">
      <div className="card">
        <span>{item.icon}</span>
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default NavItem;
