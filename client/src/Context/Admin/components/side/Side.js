import React from "react";
import { Center, Notice } from "../../";
import "./side.scss";

const Side = () => {
  return (
    <div className="side">
      <div className="sideContainer">
        <Center />
        <Notice />
      </div>
    </div>
  );
};

export default Side;
