import React from "react";
import "./center.scss";
import Nav from "../navbar/Nav";
import Top from "../Top/Top";
import Chart from "../chart/Chart";

const Center = () => {
  return (
    <div className="Center">
      <Nav />
      <Top />
      <Chart />
    </div>
  );
};

export default Center;
