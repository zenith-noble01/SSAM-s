import React from "react";
import { Outlet } from "react-router-dom";
import { MeetingTable } from "../../";
import "./Meetings.scss";

const Meetings = () => {
  return (
    <div>
      <MeetingTable />
      <Outlet />
    </div>
  );
};

export default Meetings;
