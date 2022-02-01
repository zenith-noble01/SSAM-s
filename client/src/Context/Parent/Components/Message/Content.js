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
            <div className="calls calls__audio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="calls calls__video">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="calls calls__seetings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
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

// search;
//<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// </svg>
