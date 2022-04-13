import React from "react";
import { Table } from "../../";
import "./Classes.scss";

const Classes = () => {
  return (
    <div className="app__teacher_classes">
      <p className="clsases__title">Classes</p>
      <div className="app__teacher_classes-container">
        <Table />
      </div>
    </div>
  );
};

export default Classes;
