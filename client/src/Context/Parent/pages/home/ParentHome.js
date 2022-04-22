import React from "react";
import "./Parent.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Parent = ({ parent }) => {
  return (
    <div className="app__parent-home">
      <Navbar parent={parent} />
      <Outlet />
    </div>
  );
};

export default Parent;
