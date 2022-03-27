import "./app.css";
import Navbar from "./Context/Parent/Components/Navbar/Navbar";
import Auth from "./Context/Parent/pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Message from "./Context/Parent/Components/Message/Message";
import NotFound from "./components/NotFound/NotFound";
import Slide from "./Context/Parent/Components/Slides/Slide";
import News from "./Context/Parent/Components/News/News";
import Notifications from "./Context/Parent/Components/Notifications/Notifications";
import { useEffect, useState } from "react";
import AuthStudent from "./Context/Student/pages/auth/AuthStudent";
import AuthTeacher from "./Context/Teacher/pages/auth/AuthTeacher";
import Container from "./Context/Container";
import AdminAuth from "./Context/Admin/pages/AdminAuth";

function App() {
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

  //get teacher
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
      {parent ? <Navbar parent={parent} /> : null}
      <Routes>
        <Route
          index
          element={
            parent || teacher || student || admin ? (
              <Container
                student={student}
                parent={parent}
                teacher={teacher}
                admin={admin}
              />
            ) : (
              <Context />
            )
          }
        />
        <Route path="authStudent" element={<AuthStudent />} />
        <Route
          path="authTeacher"
          element={
            teacher ? (
              <Container
                admin={admin}
                student={student}
                parent={parent}
                teacher={teacher}
                z
              />
            ) : (
              <AuthTeacher />
            )
          }
        />
        <Route path="AuthParent" element={parent ? <Container /> : <Auth />} />
        <Route path="Message" element={parent ? <Message /> : <Auth />} />
        <Route path="Slides" element={parent ? <Container /> : <Slide />} />
        <Route
          path="News"
          element={parent || teacher || student ? <News /> : <Context />}
        />
        <Route
          path="Notifications"
          element={
            parent || teacher || student ? <Notifications /> : <Context />
          }
        />
        <Route
          path="adminAuth"
          element={admin ? <Container /> : <AdminAuth />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
