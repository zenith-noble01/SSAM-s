import React from "react";
import "./nav.scss";

const Sidebar = () => {
  return (
    <div className="adminNav">
      <div className="header">
        <p>Dashboard</p>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />
        <button>ser</button>
      </div>
    </div>
  );
};

export default Sidebar;
