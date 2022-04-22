import React from "react";
import Content from "./Content";
import "./Message.css";
import MessageSidebar from "./MessageSidebar";
import Profile from "./Profile";

const Message = () => {
  return (
    <div className="message">
      <div className="messageContainer">
        <div className="MessageSide">
          <MessageSidebar />
        </div>
        <div className="MessageContent">
          <Content />
        </div>
        <div className="MessageProfile">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Message;
