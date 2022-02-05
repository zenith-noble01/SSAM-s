import React from "react";
import "./Feedback.css";
import teacher from "../../../../images/logo.png";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feebackHeader">
        <p>feedbacks on your Child by teachers</p>
      </div>
      <div className="feedbackContainer">
        <div className="feedbacks">
          <img src={teacher} alt="" />
          <div className="feedbacksContent">
            <p className="teacher_des">Physics Teacher</p>
            <p className="teacher_feed">
              zenith is a hardworking boy sir tell him to keep up
            </p>
          </div>
        </div>
        <div className="feedbacks">
          <img src={teacher} alt="" />
          <div className="feedbacksContent">
            <p className="teacher_des">Physics Teacher</p>
            <p className="teacher_feed">
              zenith is a hardworking boy sir tell him to keep up
            </p>
          </div>
        </div>
        <div className="feedbacks">
          <img src={teacher} alt="" />
          <div className="feedbacksContent">
            <p className="teacher_des">Physics Teacher</p>
            <p className="teacher_feed">
              zenith is a hardworking boy sir tell him to keep up
            </p>
          </div>
        </div>
        <div className="feedbacks">
          <img src={teacher} alt="" />
          <div className="feedbacksContent">
            <p className="teacher_des">Physics Teacher</p>
            <p className="teacher_feed">
              zenith is a hardworking boy sir tell him to keep up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
