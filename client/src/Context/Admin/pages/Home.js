import React from "react";
import Side from "../components/side/Side";
import Sidebar from "../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="AdminHome">
      <Sidebar />
      <Side />
    </div>
  );
};

export default Home;
