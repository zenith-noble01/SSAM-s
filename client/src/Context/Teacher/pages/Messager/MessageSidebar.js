import axios from "axios";
import React, { useEffect } from "react";
import "./Message.css";
import Sender from "./Sender";

const MessageSidebar = ({ openConversation, conversation, user }) => {
  console.log(conversation);
  useEffect(() => {
    const message = conversation;
    console.log(message);
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api//${user._id}`);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  });

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
        {conversation.map((conversation) => (
          <Sender
            key={conversation._id}
            conversation={conversation}
            openConversation={openConversation}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageSidebar;
