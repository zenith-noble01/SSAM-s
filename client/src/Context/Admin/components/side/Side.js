import React from "react";
import Center from "../center/Center";
import Notice from "../notice/Notice";
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
