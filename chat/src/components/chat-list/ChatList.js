import * as React from "react";
import List from "@mui/material/List";
import { useState } from "react";
import { Chat } from "./chat";
import { useParams } from "react-router-dom";

export const ChatList = () => {
  const [chatList] = useState(["chat1", "chat2", "chat3"]);
  const { chatId } = useParams();

  return (
    <>
      <List components={"nav"}>
        {chatList.map((chat) => (
          <Chat key={chat} title={chat} selected={chat === chatId} />
        ))}
      </List>
    </>
  );
};
