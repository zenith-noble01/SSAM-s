import React from "react";
import { Chart } from "../..";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="app__teacher-Dashboard">
      <p className="Dashboard__title">Dashboard</p>
      <Chart />
      <div className="Dashboard__container">
        <div className="Dashboard__content">content</div>
        <div className="Dashboard__content">content2</div>
      </div>
    </div>
  );
};

export default Dashboard;
