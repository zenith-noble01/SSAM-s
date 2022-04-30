import React, { useState } from "react";
import Content from "./Content";
import "./Message.css";
import robot from "../../../../images/robot.gif";
import MessageSidebar from "./MessageSidebar";

const Message = ({ user }) => {
  const [currentChat, setCurrentChat] = useState(false);

  const openConversation = (con) => {
    setCurrentChat(con);
  };

  return (
    <div className="message">
      <div className="messageContainer">
        <div className="MessageSide">
          <MessageSidebar openConversation={openConversation} />
        </div>
        <div className="MessageContent">
          {currentChat ? (
            <Content own={user._id} user={user} chat={currentChat} />
          ) : (
            <div className="noMessage">
              <div className="noMessageContainer">
                <img src={robot} alt="" />
                <p>
                  Please select A chat and get started with the cop message
                  Feature
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
