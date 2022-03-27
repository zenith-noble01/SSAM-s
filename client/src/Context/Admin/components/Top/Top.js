import React from "react";
import "./Top.scss";

const Top = () => {
  return (
    <div className="Top">
      <div className="TopContainer">
        <div className="TopCont one">
          <div className="logo">
            <span>logo</span>
          </div>
          <p className="total">Total Students </p>
          <span>100</span>
        </div>
        <div className="TopCont two">
          <div className="logo">
            <span>logo</span>
          </div>
          <p className="total">Total teachers</p>
          <span>100</span>
        </div>
        <div className="TopCont three">
          <div className="logo">
            <span>logo</span>
          </div>
          <p className="total">total parents</p>
          <span>100</span>
        </div>
        <div className="TopCont four">
          <div className="logo">
            <span>logo</span>
          </div>
          <p className="total">total subjects</p>
          <span>100</span>
        </div>
      </div>
    </div>
  );
};

export default Top;
