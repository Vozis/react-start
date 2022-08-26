import * as React from "react";
import List from "@mui/material/List";
import { useCallback, useState } from "react";
import { Chat } from "./chat";

export const ChatList = ({ chatList }) => {
  return (
    <>
      <List components={"nav"}>
        {Object.keys(chatList).map((chat) => (
          <Chat
            key={chat}
            chat={chat}
            // selected={chat === selectedRoom}
            // handleListItemClick={handleListItemClick}
          />
        ))}
      </List>
    </>
  );
};

/*
const [chatList] = useState({
  chat1: {
    name: "Chat 1",
    id: 1,
    content: [
      {
        message: "Message",
        author: "Author",
      },
    ],
  },
  chat2: {
    name: "Chat 2",
    id: 2,
    content: [
      {
        message: "Message",
        author: "Author",
      },
    ],
  },
});*/
