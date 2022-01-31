import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState(false);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
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
            <form>
              <h3>Sign Up</h3>
              <input type="email" placeholder="Email" require />
              <input type="password" placeholder="Passord" require />
              <input type="submit" value="LogIn" />
              <a href="#zentih" className="forgot">
                Forgot Password
              </a>
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
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Usename" require />
              <input type="email" placeholder="Email" require />
              <input type="password" placeholder="Passord" require />
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
