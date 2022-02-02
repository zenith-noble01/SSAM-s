import React, { useState, useRef, useContext } from "react";
import "./Auth.css";
import axios from "axios";
import { ParentAuthContext } from "../../../../Auth/AAuthContex";
import { loginCall } from "../../../../Auth/apiCalls";
import { Link } from "react-router-dom";

const Auth = () => {
  const [active, setActive] = useState(false);
  // const history = useHistory();

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const parent = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", parent);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const { isFetching, dispatch } = useContext(ParentAuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              <input type="email" placeholder="Email" ref={email} require />
              <input
                type="password"
                placeholder="Passord"
                require
                ref={password}
              />
              <input type="submit" value="LogIn" disabled={isFetching} />
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
                ref={username}
              />
              <input type="email" ref={email} placeholder="Email" require />
              <input
                type="password"
                placeholder="Password"
                require
                ref={password}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                require
                ref={passwordAgain}
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
    </div>
  );
};

export default Auth;
