import React from "react";
import "./home.scss";
import { Navbar, Sidebar, Wrapper } from "../../index";

const HomeT = () => {
  return (
    <div className="Teacher">
      <Navbar />
      <div className="teacher__container">
        <Sidebar />
        <Wrapper />
      </div>
    </div>
  );
};

export default HomeT;
