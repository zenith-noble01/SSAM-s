import React, { useEffect, useState } from "react";
import "./Attendance.scss";
import axios from "axios";

const Attendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      await axios
        .get("https://schoolcop.herokuapp.com/api/authStudent/studentclass/Lss")
        .then((res) => {
          setData(res.data.students);
        });
    };
    getStudent();
  }, []);

  const handlePresent = async (item) => {
    console.log(item);
    const present = {
      userId: item._id,
      date: new Date(),
      status: true,
      message: "Present",
    };

    try {
      await axios
        .post(
          "https://schoolcop.herokuapp.com/api/attendance/takeattendance",
          present
        )
        .then((res) => {
          console.log(res.data);
          setLoading(res.statusText);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAbsent = (item) => {
    const absent = {
      userId: item._id,
      date: new Date(),
      status: false,
      message: "Absent",
    };

    try {
      axios
        .post(
          "https://schoolcop.herokuapp.com/api/attendance/takeattendance",
          absent
        )
        .then((res) => {
          console.log(res.data);
          setLoading(res.statusText);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
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
                <button onClick={() => handlePresent(item)}>
                  {loading === "OK" ? <i className="fa fa-check" /> : "Present"}
                </button>
                <button onClick={() => handleAbsent(item)}></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
