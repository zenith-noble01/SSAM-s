import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
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
              <Link className="link" to="/Home">
                <i className="fa fa-home"></i>
                <li>Home</li>
              </Link>
            </div>
            <div className="centnav__links">
              <Link className="link" to="/Message">
                <i className="fa fa-user"></i>
                <li>Message</li>
              </Link>
            </div>
            <div className="centnav__links">
              <i className="fa fa-bell"></i>
              <li>Notification</li>
            </div>
            <div className="centnav__links">
              <i className="fa fa-users"></i>
              <li>News</li>
            </div>
          </ul>
        </div>
        <div className="rightnav">
          <img src={logo} alt="" onClick={() => setDrop(!drop)} />

          <div className={drop ? "navUser__profile drop" : "navUser__profile"}>
            <div className="topnav__userProfile">
              <img src={logo} alt="" />
              <div className="name__profile">
                <p>Zenith Noble</p>
                <p>the Insane</p>
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
              <p>Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
