import * as React from "react";
import List from "@mui/material/List";
import { useCallback, useState } from "react";
import { Chat } from "./chat";
import { useParams } from "react-router-dom";

export const ChatList = () => {
  const [chatlist] = useState(["chat1", "chat2", "chat3"]);
  const { chatId } = useParams();

  return (
    <>
      <List components={"nav"}>
        {chatlist.map((chat) => (
          <Chat key={chat} title={chat} selected={chat === chatId} />
        ))}
      </List>
    </>
  );
};
