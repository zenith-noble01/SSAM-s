import React from "react";
import Admin from "./Admin/Admin";
import Parent from "./Parent/pages/home/Parent";
import Student from "./Student/pages/Home/Student";
import { TeacherHome } from "./Teacher";

const Container = ({ student, parent, admin }) => {
  const teacher = true;
  return (
    <div>
      {teacher && (
        <div className="teacherContainer">
          <TeacherHome />
        </div>
      )}

      {parent && (
        <div className="parentCon">
          <Parent />
        </div>
      )}

      {student && (
        <div className="studentContainer">
          <Student />
        </div>
      )}

      {admin && (
        <div className="admin">
          <Admin admin={admin} />
        </div>
      )}
    </div>
  );
};

export default Container;
