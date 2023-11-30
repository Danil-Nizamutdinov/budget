/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import Login from "../component/Login/Login";

function WithAuthCheck(Component) {
  const user = useSelector((state) => state.userReducer.user);

  if (!user.id) {
    return <Login />;
  }

  return <Component />;
}

export default WithAuthCheck;
