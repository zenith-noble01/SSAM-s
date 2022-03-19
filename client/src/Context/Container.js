import React from "react";
import Admin from "./Admin/Admin";
import Parent from "./Parent/pages/home/Parent";
import Student from "./Student/pages/Home/Student";
import HomeT from "./Teacher/pages/Home/HomeT";

const Container = ({ student, teacher, parent, admin }) => {
  return (
    <div>
      {teacher && (
        <div className="teacherContainer">
          <HomeT teacher={teacher} />
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
          <Admin />
        </div>
      )}
    </div>
  );
};

export default Container;
