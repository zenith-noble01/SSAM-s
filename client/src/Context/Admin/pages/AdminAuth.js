import React, { useState, useEffect } from "react";
import "./auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute, registerRoute } from "../../../api/admin";

const AdminAuth = () => {
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin")) {
      navigate("/");
    }
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const google = () => {
    window.open("http://localhost:5000/Adminauth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  // const username = useRef();
  // const email = useRef();
  // const password = useRef();
  // const passwordAgain = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordAgain !== password) {
      return toast.error("Passwords don't match", toastOptions);
    } else {
      const teacher = {
        username,
        email,
        password,
      };
      console.log(teacher);
      try {
        const { data } = await axios.post(registerRoute, teacher);
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem("admin", JSON.stringify(data.user));
          window.location.reload();
          navigate("/");
        }
      } catch (err) {
        toast.error(err, toastOptions);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const parent = {
        email,
        password,
      };
      const { data } = await axios.post(loginRoute, parent);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("admin", JSON.stringify(data.user));
        window.location.reload();
        navigate("/");
      }
    } catch (err) {
      toast.error(err, toastOptions);
    }
  };

  return (
    <div className="auth">
      <div className="authContainer">
        <div className="bg">
          <div className="box signIn">
            <h2>Already Have an Account ?</h2>
            <button className="signInBtn" onClick={() => setActive(!active)}>
              Sign In
            </button>
          </div>
          <div className="box signUp">
            <h2>Don't Have an Account ?</h2>
            <button className="signUpBtn" onClick={() => setActive(!active)}>
              Sign Up
            </button>
          </div>
        </div>
        <div className={active ? "forms activeSide" : "forms"}>
          <div className="form signInForm">
            <form onSubmit={handleLogin}>
              <h3>Sign Up</h3>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                require
              />
              <input
                type="password"
                placeholder="Password"
                require
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Log In" />
              <Link to="/forgotpassword" className="link">
                Forgot Password
              </Link>
              <div className="oauth">
                <div className="lineContainer">
                  <div className="line"></div>
                  <div className="or">OR</div>
                </div>
                <div className="oauthBtn">
                  <div className="oauth__btn google" onClick={google}>
                    <i className="fab fa-google"></i>
                    <p>Google</p>
                  </div>
                  <div className="oauth__btn facebook" onClick={facebook}>
                    <i className="fab fa-facebook"></i>
                    <p>Facebook</p>
                  </div>
                  <div className="oauth__btn github" onClick={github}>
                    <i className="fab fa-github"></i>
                    <p>Github</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="form signUpForm">
            <form onSubmit={handleRegister}>
              <h3>Sign In</h3>
              <input
                type="text"
                placeholder="Username"
                require
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                require
              />
              <input
                type="password"
                placeholder="Password"
                require
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                require
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
              <input type="submit" value="Register" />
              <div className="oauth">
                <div className="lineContainer">
                  <div className="line"></div>
                  <div className="or">OR</div>
                </div>
                <div className="oauthBtn">
                  <div className="oauth__btn google" onClick={google}>
                    <i className="fab fa-google"></i>
                    <p>Google</p>
                  </div>
                  <div className="oauth__btn facebook" onClick={facebook}>
                    <i className="fab fa-facebook"></i>
                    <p>Facebook</p>
                  </div>
                  <div className="oauth__btn github" onClick={github}>
                    <i className="fab fa-github"></i>
                    <p>Github</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminAuth;
