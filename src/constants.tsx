import {TbTicket} from "react-icons/tb";
import {LuCompass} from "react-icons/lu";
import {FaRegCalendarAlt} from "react-icons/fa";

export const navItems = [
  {name: "Events", icon: <TbTicket />},
  {name: "Calendars", icon: <FaRegCalendarAlt />},
  {name: "Explore", icon: <LuCompass />},
];

export const themeColor = [
  {
    backgroundColor: "#ADD8E6",
    themeName: "Minimal",
    name: "Light Blue",
    font: "Times New Roman",
  },
  {
    backgroundColor: "#9b5628",
    themeName: "Holiday",
    name: "Brown",
    font: "Calibri ",
  },
  {
    backgroundColor: "#ffc0cb",
    themeName: "Abstract",
    name: "Pink",
    font: "Georgia",
  },
  {
    backgroundColor: "#cfcffb",
    themeName: "Quantum",
    name: "Light Purple",
    font: "Corbel",
  },
];

export const dayNames: Record<any, string> = {
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
};

export const rightPanelOptions = [
  {icon: <div></div>, name: "Color", colorName: ""},
  {name: "Typeface", style: "default"},
];

