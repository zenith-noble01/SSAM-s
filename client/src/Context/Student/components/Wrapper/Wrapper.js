import React from "react";
import "./Wrapper.scss";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="app__OutletWrapper">
      <Outlet />
    </div>
  );
};

export default Wrapper;
