import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="auth">
      <div className="authContainer">
        <div className="bg">
          <div className="box signIn">
            <h2>Already Have an Account ?</h2>
            <button className="signInBtn" onclick={() => setActive(!active)}>
              Sign In
            </button>
          </div>
          <div className="box signUp">
            <h2>Don't Have an Account ?</h2>
            <button className="signUpBtn" onclick={() => setActive(!active)}>
              Sign Up
            </button>
          </div>
        </div>
        <div className={active ? "forms activeSide" : "forms"}>
          <div className="form signInForm">
            <form>
              <h3>Sign In</h3>
              <input type="email" placeholder="Email" require />
              <input type="password" placeholder="Passord" require />
              <input type="submit" value="LogIn" />
              <a href="#zentih" className="forgot">
                Forgot Password
              </a>
            </form>
          </div>
          <div className="form signUpForm">
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Usename" require />
              <input type="email" placeholder="Email" require />
              <input type="password" placeholder="Passord" require />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
