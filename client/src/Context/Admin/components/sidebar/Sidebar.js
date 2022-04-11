import React, { useState } from "react";
import "./sidebar.scss";
import user from "../../../../images/logo.png";

const Sidebar = ({ admin }) => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  console.log(admin);
  const handleLogout = () => {
    localStorage.clear("admin");
    window.location.reload();
  };
  return (
    <div className="adminSidebar">
      <div className="logo">
        <h1 className="title">School cop Admin</h1>
        <hr />
      </div>
      <div className="center">
        <ul>
          <li>
            <span>icon</span>
          </li>
          <li>
            <span>Overview</span>
          </li>
          <li>
            <span>Courses</span>
          </li>
          <li>
            <span>Students</span>
          </li>
          <li>
            <span>Teachers</span>
          </li>
          <li>
            <span>Exam</span>
          </li>
          <li>
            <span>Result</span>
          </li>
          <li>
            <span>Video</span>
          </li>
        </ul>
      </div>
      <div className="bottomContainer">
        <div className="themeContainer">
          <div className="themesSwitcher" onClick={() => setDark(!dark)}>
            <div className={dark ? "light dark" : "light"}>
              {dark ? "D" : "L"}
            </div>
          </div>
        </div>
        <div className="userProf">
          <div className="prof">
            <img src={user} alt="" />
            <div className="details">
              <p className="nameA">{admin.username}</p>
              <p className="emailA">{admin.email}</p>
            </div>
          </div>
          <div className="coo">
            <div className="icons" onClick={() => setOpen(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={open ? "adminAcc op" : "adminAcc"}>
              <p>Profile</p>
              <p onClick={handleLogout}>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
