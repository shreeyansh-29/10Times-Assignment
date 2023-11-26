import React from "react";
import "./index.css";
import { dayNames, eventDetails, monthNames } from "../../../constants";
import EventCard from "../../atoms/eventCard";

export interface itemType {
  time: string;
  title: string;
  createdBy: string;
  eventMode: string;
  invitation: string;
  img: string;
}

const EventListing = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <h1>Events</h1>
        <div>
          <p>Upcoming</p>
          <p>Past</p>
        </div>
      </div>
      <div className="eventListing">
        {eventDetails.map((item) => (
          <div className="detail-container">
            <div>
              <h2>{item.date}</h2>
              <p>{item.day}</p>
            </div>
            <EventCard item={item} key={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
