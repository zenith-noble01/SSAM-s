import React from "react";
import { Link } from "react-router-dom";
import "./teacher.scss";

const Teacher = ({ teacher }) => {
  console.log(teacher);
  return (
    <div className="app__teacher-route">
      <p className="app__teacher-route__name">
        Welcome Mr/Mrs <span> {teacher.username}</span>
      </p>
      <p className="app__teacher-desc">
        Please select choose your fields and click the continue by clicking the
        continue button
      </p>
      <div className="app__teacher-selections">
        <div className="app__teacher-selectors">
          <p>Please Select your the classes that you'll be teaching</p>
        </div>
        <div className="app__teacher-selectors">
          <p>Please Select the subject that you'll be teaching</p>
        </div>
      </div>
      <Link to="/teacher" className="link">
        <button>Continue Here</button>
      </Link>
    </div>
  );
};

export default Teacher;
