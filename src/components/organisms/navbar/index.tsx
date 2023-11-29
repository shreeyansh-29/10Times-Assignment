import {navItems} from "../../../constants";
import NavItem from "../../atoms/navItem";
import "./index.css";

export interface itemType {
  name: string;
  icon: JSX.Element;
}

const Navbar = () => {
  return (
    <div className="navbar">
      {navItems.map((item: itemType) => (
        <NavItem item={item} key={item.name} />
      ))}
    </div>
  );
};

export default Navbar;
