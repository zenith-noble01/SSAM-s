import React from "react";
import "./Message.css";
import Sender from "./Sender";

const MessageSidebar = () => {
  return (
    <div className="MessageSidebar">
      <div className="MessageSidebarContainer">
        <div className="sidebarSearch">
          <i className="fa fa-search"></i>
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
