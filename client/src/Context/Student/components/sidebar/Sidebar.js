import React, { useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="Teacher__sidebar">
      <p className="teacher__Title">School Cop</p>
      <ul>
        <li
          onClick={() => setActive(1)}
          className={active === 1 ? "ul__links activeLink" : "ul__links"}
        >
          <Link className="link" to="/teacher">
            <span>Dashboard</span>
          </Link>
        </li>
        <li
          onClick={() => setActive(2)}
          className={active === 2 ? "ul__links activeLink" : "ul__links"}
        >
          <Link className="link" to="/teacher/students">
            <span>Students</span>
          </Link>
        </li>
        <li
          onClick={() => setActive(3)}
          className={active === 3 ? "ul__links activeLink" : "ul__links"}
        >
          <Link className="link" to="/teacher/classes">
            <span>Classes</span>
          </Link>
        </li>
        <li
          onClick={() => setActive(4)}
          className={active === 4 ? "ul__links activeLink" : "ul__links"}
        >
          <Link className="link" to="/teacher/meetings">
            <span>Meetings</span>
          </Link>
        </li>
        <li
          onClick={() => setActive(5)}
          className={active === 5 ? "ul__links activeLink" : "ul__links"}
        >
          <Link className="link" to="/teacher/takeAttendance">
            <span>TakeAttendance</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
