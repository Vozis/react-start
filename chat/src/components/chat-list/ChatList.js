import * as React from "react";
import List from "@mui/material/List";
import { useCallback, useState } from "react";
import { Chat } from "./chat";

export const ChatList = () => {
  const [chatlist] = useState(["chat1", "chat2", "chat3"]);
  return (
    <>
      <List components={"nav"}>
        {chatlist.map((chat) => (
          <Chat
            key={chat}
            title={chat}
            // selected={chat === selectedRoom}
            // handleListItemClick={handleListItemClick}
          />
        ))}
      </List>
    </>
  );
};
