import React from "react";
import zenith from "../.../../../../../images/logo.png";
import "./Message.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="ProfileContainer">
        <img src={zenith} alt="" />
        <div className="profileContent">
          <p>zentih noble</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
