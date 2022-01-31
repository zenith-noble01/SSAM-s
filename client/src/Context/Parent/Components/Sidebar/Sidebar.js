import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <p className="recent">Recent</p>
        <div className="recent__sidebar">
          <div className="recentLinks">
            <i className="fa fa-user"></i>
            <p>
              zenith noble zenith noble and zenith noble is still here again
            </p>
          </div>
          <div className="recentLinks">
            <i className="fa fa-user"></i>
            <p>
              zenith noble zenith noble and zenith noble is still here again
            </p>
          </div>
          <div className="recentLinks">
            <i className="fa fa-user"></i>
            <p>
              zenith noble zenith noble and zenith noble is still here again
            </p>
          </div>
        </div>
        <div className="groups">
          <p className="header">Groups</p>
          <div className="group__links">
            <i className="fa fa-users"></i>
            <p>Physics group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
