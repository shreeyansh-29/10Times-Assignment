import {BrowserRouter, Route, Switch} from "react-router-dom";
import EventsListingPage from "../pages/eventsListingPage";
import EventsCreationPage from "../pages/eventsCreationPage";

export const RouteNames = {
  landing: "/",
  eventListing: "/event-listing",
};

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RouteNames.landing} component={EventsCreationPage} />
        <Route exact path={RouteNames.eventListing} component={EventsListingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouteComponent;
