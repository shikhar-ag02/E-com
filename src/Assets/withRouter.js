import React from "react";
import { useNavigate } from "react-router";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};
export default withRouter;
