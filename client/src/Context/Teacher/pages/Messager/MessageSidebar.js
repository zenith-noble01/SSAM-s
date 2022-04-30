import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Message.css";
import Sender from "./Sender";
import { host } from "../../../../api/admin";

const MessageSidebar = ({ openConversation }) => {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const getChat = async () => {
      try {
        const res = await axios.get(`${host}/api/rooms`);
        setChat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getChat();
  }, []);

  const chatdata = chat?.data;

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
        {chatdata?.map((chat) => (
          <Sender
            key={chat._id}
            id={chat._id}
            chat={chat}
            openConversation={openConversation}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageSidebar;
