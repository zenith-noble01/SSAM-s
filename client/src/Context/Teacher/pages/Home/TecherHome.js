import React from "react";
import "./home.scss";
import { Sidebar, Wrapper } from "../../index";

const HomeT = () => {
  return (
    <div className="Teacher">
      <div className="teacher__container">
        <Sidebar />
        <Wrapper />
      </div>
    </div>
  );
};

export default HomeT;
