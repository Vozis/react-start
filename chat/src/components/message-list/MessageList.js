import React, { useEffect, useState, useRef, useCallback } from "react";
import { Message } from "./message";
import { Input, SendIcon } from "../styles";
import { InputAdornment } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/messages";
import { createMessage } from "../../store/messages/messagesSliceReducer";

export const MessageList = () => {
  const { chatId } = useParams();
  const messages = useSelector(
    (state) => state.messages.messages[chatId] ?? []
  );
  // console.log("chatId", chatId);
  // console.log("messages", messages);
  /*const [messageList, setMessageList] = useState({
      chat1: [
        {
          author: "User",
          message: "Первое сообщение в первом чате",
          date: new Date(),
        },
        {
          author: "Bot",
          message: "Ответ на первое сообщение в первом чате",
          date: new Date(),
        },
      ],
      chat2: [
        {
          author: "User",
          message: "Первое сообщение во втором чате",
          date: new Date(),
        },
      ],
      chat3: [
        {
          author: "User",
          message: "Первое сообщение в третьем чате",
          date: new Date(),
        },
      ],
    });*/

  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const ref = useRef();
  const dispatch = useDispatch();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(
          createMessage({
            chatId,
            message,
            author,
          })
        );
        // dispatch(sendMessage(chatId, { message, author }));
        inputRef.current.children[0].focus();
        setValue("");
      }
    },
    [chatId, dispatch]
  );
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    {
      inputRef && inputRef.current.children[0].focus();
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        send("Hello from Bot", "Bot");
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messages, send]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} chatId={chatId} />
        ))}
      </div>

      <Input
        fullWidth
        ref={inputRef}
        placeholder="Введите сообщение..."
        value={value}
        onChange={handleChange}
        onKeyDown={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={send} />}
          </InputAdornment>
        }
      />
    </>
  );
};
