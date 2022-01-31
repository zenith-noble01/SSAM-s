import React from "react";
import "./Message.css";
import zenith from "../.../../../../../images/logo.png";

const Content = () => {
  return (
    <div className="Content">
      <div className="ContentContainer">
        <div className="contentTop">
          <div className="userInfo">
            <img src={zenith} alt="" />
            <p>Zenith noble</p>
          </div>
          <div className="top__items">
            <div className="calls calls__audio">audio</div>
            <div className="calls calls__video">video</div>
            <div className="calls calls__seetings">settings</div>
          </div>
        </div>
        <div className="Messages__container">
          <div className="senders">
            <p>
              zenith is here with the main organisation of the cocan Industry
            </p>
          </div>
          <div className="receiver">
            <p>
              zenith is here with the main organisation of the cocan Industry
            </p>
          </div>
          <div className="senders">
            <p>
              zenith is here with the main organisation of the cocan Industry
            </p>
          </div>
          <div className="receiver">
            <p>
              zenith is here with the main organisation of the cocan Industry
            </p>
          </div>
        </div>
        <div className="sendMessage__Container">
          <textarea placeholder="Write message"></textarea>
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
