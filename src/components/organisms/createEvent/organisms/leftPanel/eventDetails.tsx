import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import ToolBox from "../../../../atoms/toolBox/toolBox";
import CustomDivider from "../../../../atoms/customDivider";
import { CiLocationOn } from "react-icons/ci";
import { PiGlobeSimple } from "react-icons/pi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

const EventDetails = () => {
  return (
    <>
      <div className="event-details">
        <IoCalendarNumberOutline className="calender-icon" />
        <div className="event-date">
          <ToolBox>
            <div className="starting-details">
              <p>Start</p>
              <div>
                <p>Sat, Nov 25</p>
                <p>03:30 PM</p>
              </div>
            </div>
          </ToolBox>
          <ToolBox>
            <div className="ending-details">
              <p>End</p>
              <div>
                <p>Sat, Nov 25</p>
                <p>04:30 PM</p>
              </div>
            </div>
          </ToolBox>
          <ToolBox>
            <div className="standard-timing">
              <PiGlobeSimple className="icon" />
              <p>GMT+05:30 Calcutta</p>
            </div>
          </ToolBox>
          <CustomDivider />
          <ToolBox>
            <div className="session-details">
              <HiOutlineSquare3Stack3D className="icon" />
              <p>Create Multi-Session Event</p>
            </div>
          </ToolBox>
        </div>
      </div>
      <div className="event-location">
        <div className="location-selector">
          <CiLocationOn className="location-icon" />
        </div>
        <ToolBox>
          <div className="location-details">
            <h2>Add Event Location</h2>
            <h3>Offline location or virtual link</h3>
          </div>
        </ToolBox>
      </div>
    </>
  );
};

export default EventDetails;
