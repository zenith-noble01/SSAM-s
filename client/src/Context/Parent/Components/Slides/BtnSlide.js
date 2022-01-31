import React from "react";

const BtnSlide = ({ direction, moveSlide }) => {
  return (
    <button
      className={direction === "next" ? "next" : "prev"}
      onClick={moveSlide}
    >
      {direction === "next" ? (
        <i className="fa fa-chevron-left"></i>
      ) : (
        <i className="fa fa-chevron-right"></i>
      )}
    </button>
  );
};

export default BtnSlide;
