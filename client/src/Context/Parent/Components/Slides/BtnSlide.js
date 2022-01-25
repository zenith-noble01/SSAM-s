import React from "react";

const BtnSlide = ({ direction, moveSlide }) => {
  return (
    <button
      className={direction === "next" ? "next" : "prev"}
      onclick={moveSlide}
    >
      {direction === "next" ? "next" : "prev"}
    </button>
  );
};

export default BtnSlide;
