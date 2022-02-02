import React from "react";
import "./Message.css";
import Sender from "./Sender";

const MessageSidebar = () => {
  return (
    <div className="MessageSidebar">
      <div className="MessageSidebarContainer">
        <div className="sidebarSearch">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="messages">
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
      </div>
    </div>
  );
};

export default MessageSidebar;
