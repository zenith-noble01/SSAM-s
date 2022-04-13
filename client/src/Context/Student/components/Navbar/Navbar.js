import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const teacher = {
    username: "zenith noble",
    email: "zenithnoble354@gmail.com",
    pic: logo,
  };
  const [drop, setDrop] = useState(false);
  const handleSignOUt = () => {
    localStorage.removeItem("teacher");
    window.location.href = "/";
  };
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="leftnav">
          <img src={logo} alt="" />
          <div className="inputContainer">
            <div className="fa fa-search"></div>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="centerNav">
          <ul>
            <div className="centnav__links">
              <Link className="link" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <li>Home</li>
              </Link>
            </div>
            <div className="centnav__links">
              <Link className="link" to="/Message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <li>Message</li>
              </Link>
            </div>
            <div className="centnav__links">
              <Link className="link" to="/Notifications">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <li>Notification</li>
              </Link>
            </div>
            <div className="centnav__links">
              <Link className="link" to="/News">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <li>News</li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="rightnav">
          <img src={teacher.pic} alt="" onClick={() => setDrop(!drop)} />

          <div className={drop ? "navUser__profile drop" : "navUser__profile"}>
            <div className="topnav__userProfile">
              <img src={teacher.pic} alt="" />
              <div className="name__profile">
                <p>{teacher.username}</p>
                <p>{teacher.email}</p>
              </div>
            </div>
            <div className="navProfile__link">
              <p>View Profile</p>
            </div>
            <div className="navUser__routes">
              <p className="routeHeader">Account</p>
              <div className="route">
                <p>Seting & Privacy</p>
                <p>Languge</p>
                <p>Help</p>
              </div>
            </div>
            <div className="navUser__routes last">
              <p className="routeHeader">Manage</p>
              <div className="route">
                <p>Messages & Activities</p>
                <p>Child's Profile</p>
                <p></p>
              </div>
              <p onClick={handleSignOUt} className="signOutBtn">
                Sign Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
