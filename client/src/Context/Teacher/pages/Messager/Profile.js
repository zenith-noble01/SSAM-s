import React from "react";
import zenith from "../.../../../../../images/logo.png";
import "./Message.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="ProfileContainer">
        <div className="Profile__Top">
          <div className="topWrapper">
            <img src={zenith} alt="" />
          </div>
        </div>
        <div className="profileContent">
          <div className="content__top_Profile">
            <p>Zenith Noble</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
