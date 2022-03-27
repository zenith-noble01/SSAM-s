import React from "react";
import Side from "../components/side/Side";
import Sidebar from "../components/sidebar/Sidebar";
import "./Home.css";

const Home = ({ admin }) => {
  return (
    <div className="AdminHome">
      <Sidebar admin={admin} />
      <Side admin={admin} />
    </div>
  );
};

export default Home;
