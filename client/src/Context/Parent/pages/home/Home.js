import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Chart from "../../Components/Charts/Charts";
import Calender from "../../Components/Calender/Calender";
import Feedback from "../../Components/Feedback/Feedback";

const Home = () => {
  return (
    <div className="wrapper__Container">
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

export default Home;
