import React, { useEffect, useState } from "react";
import Content from "./Content";
import "./Message.css";
import robot from "../../../../images/robot.gif";
import MessageSidebar from "./MessageSidebar";
import axios from "axios";

const Message = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState("");
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState("");

  useEffect(() => {
    axios
      .get("/api/message/conversation/")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="message">
      <div className="messageContainer">
        <div className="MessageSide">
          <MessageSidebar
            messages={messages}
            setReceiver={setReceiver}
            user={user}
            setCurrentChat={setCurrentChat}
            currentChat={currentChat}
          />
        </div>
        <div className="MessageContent">
          {currentChat ? (
            <Content own={true} user={user} />
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
