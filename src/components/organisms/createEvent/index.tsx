import React, { useState } from "react";
import "./index.css";
import LeftPanel from "./organisms/leftPanel/index";
import RightPanel from "./organisms/rightPanel/index";

const CreateEvent = () => {

  const [activeTheme, setActiveTheme] = useState<string>('');

  const handleClick = (item: string) => {
    setActiveTheme(item);
  }

  return (
    <div className="container">
      <LeftPanel/>
      <RightPanel activeTheme={activeTheme}  onClick={handleClick}/>
    </div>
  );
};

export default CreateEvent;
