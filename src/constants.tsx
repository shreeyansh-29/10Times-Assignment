import { TbTicket } from "react-icons/tb";
import { LuCompass } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";

export const navItems = [
  { name: "Events", icon: <TbTicket /> },
  { name: "Calendars", icon: <FaRegCalendarAlt /> },
  { name: "Explore", icon: <LuCompass /> },
];

export const themeColor = [
  { backgroundColor: "#f4f5f6", themeName: "Minimal", name:'Gray' },
  { backgroundColor: "#9b5628", themeName: "Holiday", name: 'Brown' },
  { backgroundColor: "#e9ebed", themeName: "Abstract", name: 'LightGrey'},
  { backgroundColor: "#cfcffb", themeName: "Quantum", name: 'Purple' },
];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const eventDetails = [
  {
    date: 'November 16',
    time: "03:40 PM",
    day: 'Wednesday',
    title: "Builder's Roundtable: How Generate AI is Transforming eCommerce",
    createdBy: "OctoML",
    eventMode: "Virtual",
    invitation: "Invited",
    img: 'https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA='
  },
  {
    date: 'December 12',
    time: "03:40 PM",
    day: 'Saturday',
    title: "Builder's Roundtable: How Generate AI is Transforming eCommerce",
    createdBy: "OctoML",
    eventMode: "Virtual",
    invitation: "Invited",
    img: 'https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA='
  },  
];

export const rightPanelOptions = [
  {icon : <div></div>, name: 'Color', colorName:''},
  {name: 'Typeface', style: 'default'}
]
