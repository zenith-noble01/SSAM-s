import React from "react";
import "./Parent.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chart from "../../Components/Charts/Charts";
import Calender from "../../Components/Calender/Calender";
import Feedback from "../../Components/Feedback/Feedback";

const Parent = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Chart />
        <div className="bottom__homeContainer">
          <Calender />
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Parent;
