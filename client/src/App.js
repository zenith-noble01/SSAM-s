import React, { useEffect, useState } from "react";
import Container from "./Context/Container";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import { NotFound } from "./components";
import { AdminAuth } from "./Context/Admin";
import { StudentAuth, StudentHome } from "./Context/Student";

import { userInputs } from "./formSource";
import {
  Classes,
  Dashboard,
  Meetings,
  Messanger,
  Students,
  TakeAttendance,
  TeacherAuth,
  TeacherHome,
  Attendance,
  Profile,
  New,
  Meeting,
} from "./Context/Teacher";
import {
  News,
  Notifications,
  ParentAuth,
  ParentHome,
  ParentHouse,
  ParentMessage,
} from "./Context/Parent";

const App = () => {
  const [parent, setParent] = useState(undefined);
  const [teacher, setTeacher] = useState(undefined);
  const [student, setStudent] = useState(undefined);
  const [admin, setAdmin] = useState(undefined);

  // const admin = true;
  //get parent
  useEffect(() => {
    const data = async () => {
      setParent(await JSON.parse(localStorage.getItem("parent")));
    };
    data();
  }, []);
  //get
  useEffect(() => {
    const data = async () => {
      setTeacher(await JSON.parse(localStorage.getItem("teacher")));
    };
    data();
  }, []);

  //get student
  useEffect(() => {
    const data = async () => {
      setStudent(await JSON.parse(localStorage.getItem("student")));
    };
    data();
  }, []);

  //get admin
  useEffect(() => {
    const data = async () => {
      setAdmin(await JSON.parse(localStorage.getItem("admin")));
    };
    data();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          index
          element={
            parent || teacher || student || admin ? (
              <Container
                parent={parent}
                teacher={teacher}
                student={student}
                admin={admin}
              />
            ) : (
              <Context />
            )
          }
        />
        <Route path="adminAuth" element={<AdminAuth />} />
        <Route path="parentAuth" element={<ParentAuth />} />
        <Route path="studentAuth" element={<StudentAuth />} />
        <Route path="teacherAuth" element={<TeacherAuth />} />

        <Route path="teacher" element={<TeacherHome teacher={teacher} />}>
          <Route index element={<Dashboard />} />
          <Route path="Classes" element={<Classes />} />
          <Route path="Meetings" element={<Meetings />}>
            <Route path=":id" element={<Meeting />} />
          </Route>
          <Route path="Profile" element={<Profile />} />
          <Route path="messages" element={<Messanger user={teacher} />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
          <Route path="takeAttendance" element={<TakeAttendance />}>
            <Route path=":id" element={<Attendance />} />
          </Route>
          <Route path="students" element={<Students />} />
        </Route>

        <Route path="student" element={<StudentHome />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="parent" element={<ParentHome parent={parent} />}>
          <Route index element={<ParentHouse />} />
          <Route path="Message" element={<ParentMessage />} />
          <Route path="News" element={<News />} />
          <Route path="Notifications" element={<Notifications />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
