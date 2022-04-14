import React from "react";
import "./Attendance.scss";
import { review } from "../../dummydata";

const Attendance = () => {
  const handlePresent = (item) => {
    const status = {
      present: true,
      message: `${item.username} was present in the Physics Class`,
      id: item.id,
    };

    console.log(status);
  };
  return (
    <div className="app__teacher-attendance">
      <p className="app__teacher-attendance__title">
        Mark the Attendance for student offring Physics in LSS
      </p>
      <div className="app__Attendance-container">
        {review.map((item, index) => (
          <div className="attendance__wrapper" key={index}>
            <div className="app__Student-attendance">
              <img src={item.imgSrc} alt="student profile  ssams" />
              <div className="wrap">
                <p>{item.username}</p>
                <p>{item.class}</p>
              </div>
            </div>
            <div className="attendance__status">
              <button onClick={() => handlePresent(item)}>Present</button>
              <button>Absent</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
