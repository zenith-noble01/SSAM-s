import React from "react";
import { Side, Sidebar } from "../../";
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
