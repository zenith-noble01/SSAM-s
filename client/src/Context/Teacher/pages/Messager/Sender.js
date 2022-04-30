import React from "react";
import "./Message.css";

const Sender = ({ openConversation, chat }) => {
  return (
    <div
      className="sender"
      onClick={() => openConversation(chat)}
      id={chat._id}
    >
      <div className="senderContaier">
        <img src={chat.image} alt="" />
        <div className="messageCont">
          <p>{chat.name}</p>
          <p className="senderMessage">{chat.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Sender;
