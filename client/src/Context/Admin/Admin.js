import React from "react";
import { Home } from "./";

const Admin = ({ admin }) => {
  return (
    <div className="admin">
      <Home admin={admin} />
    </div>
  );
};

export default Admin;
