import React from "react";
import "./Admin.css";
import Home from "./pages/Home";

const Admin = ({ admin }) => {
  return (
    <div className="admin">
      <Home admin={admin} />
    </div>
  );
};

export default Admin;
