import React from "react";
import "./index.css";
import { itemType } from "../../organisms/eventListing";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import CustomButton from "../customButton";

interface Iprops {
  item: itemType;
}

const customButtonStyles = {
  backgroundColor: '#3d5ef1',
  margin : '10px 0px 10px 0px',
  padding: '4px 12px',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: '500',
}

const EventCard = ({ item }: Iprops) => {
  
  return (
    <div className="eventDetails" >
      <div className="infoSection">
        <p>{item.time}</p>
        <h1>{item.title}</h1>
        <div>
          <AiFillDingtalkCircle
            style={{ color: "#3982f4", fontSize: "28px" }}
          />
          <p>By {item.createdBy}</p>
        </div>
        <div>
          <BsCameraVideo style={{ fontSize: "28px", color:'grey' }} />
          <p>{item.eventMode}</p>
        </div>
        <CustomButton name={item.invitation} styles={customButtonStyles}/>
      </div>
      <div className="eventImage">
        <img src={item.img} />
      </div>
    </div>
  );
};

export default EventCard;
