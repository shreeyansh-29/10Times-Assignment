import {IoCalendarNumberOutline} from "react-icons/io5";
import ToolBox from "../../../../../../atoms/toolBox/toolBox";
import CustomDivider from "../../../../../../atoms/customDivider";
import {CiLocationOn} from "react-icons/ci";
import {PiGlobeSimple} from "react-icons/pi";
import {HiOutlineSquare3Stack3D} from "react-icons/hi2";
import CustomInput from "../../../../../../atoms/customInput";
import {FormikProps, useFormikContext} from "formik";
import {FormState} from "../..";
import dayjs, {Dayjs} from "dayjs";
import PickerContainer from "../../../../../../molecules/pickerContainer";
import "./index.css";

interface Iprops {
  props: FormikProps<FormState>;
}

const customInputStyles = {
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: "1.2rem",
  backgroundColor: "#f6f6f6",
};

const format = "hh:mm A";

const EventDetails = (Iprops: Iprops) => {
  const {props} = Iprops;
  const {setFieldValue} = useFormikContext<any>();

  const handleDateChange = (
    date: Dayjs | null,
    dateString: string,
    fieldName: string
  ) => {
    setFieldValue(fieldName, dateString);
  };

  const handleTimeChange = (
    time: dayjs.Dayjs | null,
    timeString: string,
    fieldName: string
  ) => {
    setFieldValue(fieldName, timeString);
  };

  return (
    <>
      <div className="event-details">
        <IoCalendarNumberOutline className="calender-icon" />
        <div className="event-date">
          <ToolBox>
            <div className="starting-details">
              <p>Start</p>
              <div>
                <div style={{width:'100%'}}>
                  <PickerContainer
                    onDateChange={(date, dateString) =>
                      handleDateChange(date, dateString, "startDate")
                    }
                    onTimeChange={(time, timeString) =>
                      handleTimeChange(time, timeString, "startTime")
                    }
                    bordered={false}
                    datePlaceholder="Start Date"
                    dateFormat="ddd, MMM D"
                    suffixIcon={false}
                    datePickerName="startDate"
                    timeFormat={format}
                    use12Hours={true}
                    timePlaceholder="Start Time"
                    timePickerName="startTime"
                  />
                  {props.touched.startDate && props.errors.startDate ? (
                    <div className="form-error">{props.errors.startDate}</div>
                  ) : props.touched.startTime && props.errors.startTime ? (
                    <div className="form-error">{props.errors.startTime}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </ToolBox>

          <ToolBox>
            <div className="ending-details">
              <p>End</p>
              <div>
                <div style={{width:'100%'}}>
                  <PickerContainer
                    onDateChange={(date, dateString) =>
                      handleDateChange(date, dateString, "endDate")
                    }
                    onTimeChange={(time, timeString) =>
                      handleTimeChange(time, timeString, "endTime")
                    }
                    bordered={false}
                    datePlaceholder="End Date"
                    dateFormat="ddd, MMM D"
                    suffixIcon={false}
                    datePickerName="endDate"
                    timeFormat={format}
                    use12Hours={true}
                    timePlaceholder="End Time"
                    timePickerName="endTime"
                    timeDisabled={!props.values.endDate}
                    dateDisabled={
                      !props.values.startDate || !props.values.startTime
                    }
                  />
                  {props.touched.endDate && props.errors.endDate ? (
                    <div className="form-error">{props.errors.endDate}</div>
                  ) : props.touched.endTime && props.errors.endTime ? (
                    <div className="form-error">{props.errors.endTime}</div>
                  ) : null}
                </div>
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
        <div className="location-container">
          <ToolBox>
            <div className="location-details">
              <CustomInput
                onChange={props.handleChange}
                styles={customInputStyles}
                autoFocus={false}
                placeholder="Add Event Location(Offline location or virtual link)"
                name="locationDetails"
              />
            </div>
          </ToolBox>
          {props.touched?.locationDetails && props.errors.locationDetails ? (
            <div className="form-error">{props.errors.locationDetails}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default EventDetails;
