import React, { useState } from "react";
import { review } from "../../dummydata";
import BtnSlide from "./BtnSlide";
import "./Slide.css";

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== review.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === review.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(review.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="slide">
      <div className="slidecontainer">
        <div className="top_slide__container">
          {review.map((item, index) => (
            <div
              className={slideIndex === index + 1 ? "slides anim" : "slides"}
              key={index}
            >
              <img src={item.imgSrc} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
          <BtnSlide moveSlide={nextSlide} direction={"next"} />
          <div className="dotscontainer">
            {Array.from({ length: 3 }).map((item, index) => (
              <div
                className={
                  slideIndex === index + 1 ? "dots activeDots" : "dots"
                }
                onclick={() => moveDot(index + 1)}
              ></div>
            ))}
          </div>
          <BtnSlide moveSlide={prevSlide} direction={"prev"} />
        </div>
        <div className="bottom_slide_container">
          <p>Let's get you set up and ready to use School Cop</p>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
