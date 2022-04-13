import React from "react";
import { Table } from "../../index";
import "./Students.scss";

const Students = () => {
  return (
    <div className="app__students">
      <p className="students__title">Students</p>
      <div className="app__students-container">
        <Table />
      </div>
    </div>
  );
};

export default Students;
