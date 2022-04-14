import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { registerRoute } from "../../../../api/Student";
import axios from "axios";

const New = ({ title }) => {
  const [file, setFile] = useState("");
  const [studentname, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [classname, setClassName] = useState("");
  const [parentname, setParentName] = useState("");
  const [status, setStatus] = useState("");
  // const [picture, setPicture] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const student = {
        studentname,
        email,
        password,
        classname,
        parentname,
        status,
      };

      await axios
        .post(registerRoute, student)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Student Name</label>
                <input
                  type="text"
                  placeholder="studentname"
                  require
                  value={studentname}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Student Email</label>
                <input
                  type="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Student password</label>
                <input
                  type="password"
                  placeholder="password"
                  require
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="formInput">
                <label>Student Class</label>
                <input
                  type="text"
                  placeholder="class"
                  require
                  value={classname}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Parent Name</label>
                <input
                  type="text"
                  placeholder="parent name"
                  require
                  value={parentname}
                  onChange={(e) => setParentName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Student Status</label>
                <input
                  type="text"
                  placeholder="eg: active"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Student desc</label>
                <input type="text" placeholder="eg: good student" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
