import {AiFillDingtalkCircle} from "react-icons/ai";
import {BsCameraVideo} from "react-icons/bs";
import CustomButton from "../customButton";
import {FormState} from "../../organisms/createEvent/organisms/leftPanel";
import "./index.css";

interface Iprops {
  item: FormState;
}

const customButtonStyles = {
  backgroundColor: "#3d5ef1",
  marginTop: "10px",
  padding: "4px 12px",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "5px",
};

const EventCard = ({item}: Iprops) => {
  return (
    <div className="eventDetails">
      <div className="infoSection">
        <p>{item.startTime}</p>
        <h1>{item.eventName}</h1>
        <div>
          <AiFillDingtalkCircle className="circle-icon" />
          <p>By {item.createdBy}</p>
        </div>
        <div>
          <BsCameraVideo className="camera-icon" />
          <p>{item.eventMode}</p>
        </div>
        <CustomButton name={item.invitation} styles={customButtonStyles} />
      </div>
      <div className="eventImage">
        <img src={item.img} alt={item.eventName} />
      </div>
    </div>
  );
};

export default EventCard;
