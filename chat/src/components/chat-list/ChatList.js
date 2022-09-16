import * as React from "react";
import List from "@mui/material/List";
import { useCallback, useContext, useState } from "react";
import { Chat } from "./chat";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  conversationsSelector,
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import {
  removeAsyncConversation as removeConversation,
  createAsyncConversation as addConversation,
} from "../../store/conversations/conversationsSliceReducer";
import { Button, Input, TextField } from "@mui/material";
import { ThemeContext } from "../../theme-context";

export const ChatList = () => {
  const { conversations, pending } = useSelector(conversationsSelector);
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chatName, setChatName] = useState("");
  const { theme, themeMui } = useContext(ThemeContext);

  const deleteConversationByName = useCallback(
    (name, event) => {
      // dispatch(deleteConversation(name));
      dispatch(removeConversation(name));
      event.preventDefault();
      // setTimeout(() => navigate("/chats"), 0);
      navigate("/chats");
    },
    [dispatch]
  );

  const handleChange = (e) => {
    setChatName(e.target.value);
  };

  const createConversationByName = () => {
    const isValidName = !conversations.includes(chatName);

    if (chatName && isValidName) {
      dispatch(addConversation(chatName));
    } else {
      alert("Ошибка в названии");
    }
  };

  return (
    <>
      <div>
        <TextField
          variant="filled"
          label="Chat name"
          value={chatName}
          onChange={handleChange}
          fullWidth
        />
        <Button
          onClick={createConversationByName}
          variant={"contained"}
          size={"small"}
          sx={{
            color: theme.theme.color,
            backgroundColor: themeMui.palette.secondary.light,
          }}
        >
          Добавить
        </Button>
      </div>
      <hr />
      {pending && <h1>Chat loading...</h1>}
      <List components={"nav"}>
        {conversations.map((chat) => (
          <Chat
            key={chat}
            title={chat}
            selected={chat === chatId}
            deleteConversationByName={deleteConversationByName}
          />
        ))}
      </List>
    </>
  );
};
