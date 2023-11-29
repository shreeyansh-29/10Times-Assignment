import {useEffect, useState} from "react";
import "./index.css";
import EventCard from "../../atoms/eventCard";
import {useAppSelector} from "../../../utils/hookUtils";
import {FormState} from "../createEvent/organisms/leftPanel";

const EventListing = () => {
  const eventListing = useAppSelector((state) => state.event.events);

  const [activeOption, setActiveOption] = useState<string>("upcoming");
  const [events, setEvents] = useState<FormState[]>([]);

  useEffect(() => {
    if (eventListing) {
      const isURL = (str: string): boolean => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return urlPattern.test(str);
      };

      const handleCheckURL = (locationDetails: string | undefined): string => {
        const details = locationDetails || "";
        return isURL(details) ? "Virtual" : "On-site";
      };

      let newArr: FormState[] = eventListing.map(
        (item: FormState | undefined) => {
          if (!item) return {};

          return {
            ...item,
            createdBy: "OctoML",
            invitation: "Invited",
            img: "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
            eventMode: handleCheckURL(item.locationDetails),
          };
        }
      );

      setEvents(newArr);
    }
  }, [eventListing]);

  const handleToggle = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className="mainContainer">
      <div className="header">
        <h1>Events</h1>
        <div>
          <div
            onClick={() => handleToggle("upcoming")}
            className={activeOption === "upcoming" ? "active" : ""}
          >
            Upcoming
          </div>
          <div
            onClick={() => handleToggle("past")}
            className={activeOption === "past" ? "active" : ""}
          >
            Past
          </div>
        </div>
      </div>
      <div className="eventListing">
        {events.map((item) => (
          <div className="detail-container">
            <div>
              <h2>{item.date}</h2>
              <p>{item.day}</p>
            </div>
            <EventCard item={item} key={item.eventName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
