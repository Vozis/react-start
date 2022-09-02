import * as React from "react";
import List from "@mui/material/List";
import { useCallback, useContext, useState } from "react";
import { Chat } from "./chat";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import {
  removeConversation,
  addConversation,
} from "../../store/conversations/conversationsSliceReducer";
import { Button, Input, TextField } from "@mui/material";
import { ThemeContext } from "../../theme-context";
import { defaults } from "autoprefixer";

export const ChatList = () => {
  const { conversations } = useSelector((state) => state.conversations);
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chatName, setChatName] = useState("");
  const { theme, themeMui } = useContext(ThemeContext);

  console.log("conversations: ", conversations);

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
    console.log(chatName);
    const isValidName = !conversations.includes(chatName);

    // switch (chatName) {
    //   case chatName === "":
    //     alert("Напишите название");
    //   case isValidName:
    //     alert("Ошибка в названии");
    //   case chatName !== "" && !isValidName:
    //     dispatch(createConversation(chatName));
    // }

    if (chatName && isValidName) {
      // dispatch(createConversation(chatName));
      dispatch(addConversation(chatName));
    } else {
      alert("Ошибка в названии");
    }
  };

  const createConversationByNamePrompt = () => {
    const name = prompt("Введите имя: ");

    if (name) {
      dispatch(createConversation(name));
    } else {
      alert("Напишите название");
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
          // onClick={createConversationByNamePrompt}
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
