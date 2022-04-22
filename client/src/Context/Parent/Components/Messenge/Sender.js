import React from "react";
import zenith from "../.../../../../../images/logo.png";
import "./Message.css";

const Sender = () => {
  return (
    <div className="sender">
      <div className="senderContaier">
        <img src={zenith} alt="" />
        <div className="messageCont">
          <p>zenith</p>
          <p className="senderMessage">
            zenith noble is here with the main guys of the afcon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sender;
