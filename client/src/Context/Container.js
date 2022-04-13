import React from "react";
import { Admin } from "./Admin";
import { Parent } from "./Parent";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

const Container = ({ student, parent, teacher, admin }) => {
  return (
    <div>
      {teacher && (
        <div className="teacherContainer">
          <Teacher teacher={teacher} />
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
