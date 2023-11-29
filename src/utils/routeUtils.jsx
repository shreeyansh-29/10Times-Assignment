const setRouteChange = (props, pathname) => {
  if (pathname !== "#") {
    props.history.push({
      pathname: pathname,
    });
  }
};

export const RouteUtil = {
  setRouteChange,
};
