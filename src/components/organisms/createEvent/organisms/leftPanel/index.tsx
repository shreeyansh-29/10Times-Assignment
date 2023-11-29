import {FaAngleDown} from "react-icons/fa";
import CustomButton from "../../../../atoms/customButton";
import LeftMenuBar from "./organisms/eventOptions";
import EventDetails from "./organisms/eventDetails";
import CustomInput from "../../../../atoms/customInput";
import {useAppDispatch} from "../../../../../utils/hookUtils";
import {createEvent} from "../../../../../redux/createEventSlice";
import {Form, Formik, FormikProps} from "formik";
import {dayNames} from "../../../../../constants";
import {useState} from "react";
import {RouteUtil} from "../../../../../utils/routeUtils";
import {withRouter} from "react-router-dom";
import * as Yup from "yup";
import dayjs from "dayjs";
import "./index.css";

const customButtonStyles = {
  backgroundColor: "#333537",
  marginTop: "40px",
  padding: "16px 80px",
  width: "100%",
};

export type FormState = {
  eventName?: string;
  locationDetails?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  day?: string;
  date?: string;
  createdBy?: string;
  invitation?: string;
  eventMode?: string;
  img?: string;
};

type Iprops = {
  history: Object;
};

export const initialState: FormState = {
  eventName: "",
  locationDetails: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
};

const LeftPanel = (props: Iprops) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (values: FormState) => {
    setIsLoading(true);
    let day: any = values.startDate?.split(", ")[0];

    dispatch(
      createEvent({
        eventName: values.eventName,
        locationDetails: values.locationDetails,
        startDate: values.startDate,
        endDate: values.endDate,
        endTime: values.endTime,
        startTime: values.startTime,
        day: dayNames[day],
        date: values.startDate?.split(", ")[1],
      })
    );
    setTimeout(() => {
      RouteUtil.setRouteChange(props, "/event-listing");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="left-panel">
        <div className="category">
          <span />
          <div className="first-container">
            <p>Create under</p>
            <h4>Personal Calendar</h4>
          </div>
          <FaAngleDown className="dropdown-icon" />
        </div>

        <Formik
          initialValues={initialState}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={formValidation}
        >
          {(props: FormikProps<FormState>) => (
            <Form>
              <div className="inputField">
                <CustomInput
                  autoFocus={true}
                  placeholder="Event Name"
                  onChange={props.handleChange}
                  name={"eventName"}
                />
                {props.touched.eventName && props.errors.eventName ? (
                  <div>{props.errors.eventName}</div>
                ) : null}
              </div>
              <EventDetails props={props} />
              <LeftMenuBar />
              <CustomButton
                disabled={props.isSubmitting}
                name={isLoading ? "Creating..." : "Create Event"}
                styles={customButtonStyles}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default withRouter(LeftPanel);

const formValidation = Yup.object().shape({
  eventName: Yup.string()
    .trim()
    .required("Event Name is required")
    .min(6, "Event Name must be off atleast 6 characters")
    .nullable(),
  locationDetails: Yup.string()
    .trim()
    .required("Offline location/Meet link is required")
    .nullable(),
  startDate: Yup.string().trim().required("Start date is required").nullable(),
  startTime: Yup.string().trim().required("Start time is required").nullable(),
  endDate: Yup.string().trim().required("End date is required").nullable(),
  endTime: Yup.string().trim().required("End time is required").nullable(),
});
