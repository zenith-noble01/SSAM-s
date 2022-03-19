import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="Top">
      <div className="TopContainer">
        <div className="TopCont one">
          <p>Total Students </p>
        </div>
        <div className="TopCont two">
          <p>Total teachers</p>
        </div>
        <div className="TopCont three">
          <p>total parents</p>
        </div>
        <div className="TopCont four">
          <p>total subjects</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
