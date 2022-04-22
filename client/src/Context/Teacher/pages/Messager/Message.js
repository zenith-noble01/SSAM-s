import React, { useEffect, useState } from "react";
import Content from "./Content";
import "./Message.css";
import robot from "../../../../images/robot.gif";
import MessageSidebar from "./MessageSidebar";
import axios from "axios";

const Message = ({ user }) => {
  const [currentChat, setCurrentChat] = useState(false);
  const [conversation, setConvensation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/conversation/${user._id}`
        );
        setConvensation(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getConversation();
  }, [user]);

  const openConversation = () => {
    setCurrentChat(true);
  };
  return (
    <div className="message">
      <div className="messageContainer">
        <div className="MessageSide">
          <MessageSidebar
            openConversation={openConversation}
            user={user}
            conversation={conversation}
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
