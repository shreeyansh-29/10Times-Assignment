import React from "react";
import "./index.css";

interface Iprops {
  name?: string;
  onClick?: any;
  styles: object;
  disabled?: boolean;
}

const CustomButton = (props: Iprops) => {
  const {name, onClick, styles, disabled = false} = props;
  return (
    <button
      className="button"
      onClick={disabled ? null : onClick}
      style={styles}
    >
      {name}
    </button>
  );
};

export default CustomButton;
