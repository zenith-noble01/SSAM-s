import React from "react";
import "./TakeAttendance.scss";
import { DataTable } from "../../";
import { Outlet } from "react-router-dom";

const TakeAttendance = () => {
  return (
    <div className="app__teacher-takeAttendance">
      <p className="app__teacher-takeAttendance__title">Select the Class</p>
      <DataTable />
      <Outlet />
    </div>
  );
};

export default TakeAttendance;
