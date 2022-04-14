import React, { useEffect, useState } from "react";
import "./Attendance.scss";
import axios from "axios";

const Attendance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      await axios
        .get("http://localhost:5000/api/authStudent/studentclass/Lss")
        .then((res) => {
          setData(res.data.students);
        });
    };
    getStudent();
  }, []);

  console.log(data);

  const handlePresent = (item) => {
    const status = {
      present: true,
      message: `${item.studentname} was present in the Physics Class`,
      id: item.id,
    };

    console.log(status);
  };

  const handleAbsent = (item) => {
    const status = {
      present: false,
      message: `${item.studentname} was absent in the Physics Class`,
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
        <div className="data__wrapper">
          {data.map((item, index) => (
            <div className="attendance__wrapper" key={index}>
              <div className="app__Student-attendance">
                <img src={item.picture} alt="student profile  ssams" />
                <div className="wrap">
                  <p>{item.studentname}</p>
                  <p>{item.classname}</p>
                </div>
              </div>
              <div className="attendance__status">
                <button onClick={() => handlePresent(item)}>Present</button>
                <button onClick={() => handleAbsent(item)}>Absent</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
