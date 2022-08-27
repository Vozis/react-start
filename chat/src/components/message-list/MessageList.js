import React, { useEffect, useState, useRef } from "react";
import { Message } from "./message";
import { Input, SendIcon } from "../styles";
import { InputAdornment } from "@mui/material";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const [messageList, setMessageList] = useState({
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
  });
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const ref = useRef();
  const { chatId } = useParams();

  console.log(messageList);

  const sendMessage = (message, author = "User") => {
    if (message) {
      setMessageList((state) => ({
        ...state,
        [chatId]: [
          ...(state[chatId] ?? []),
          { author, message, date: new Date() },
        ],
      }));
      inputRef.current.children[0].focus();
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
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
  });

  useEffect(() => {
    const messages = messageList[chatId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("Hello from Bot", "Bot");
      }, 500);
      console.log(messageList);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [chatId, messageList, sendMessage]);

  const messages = messageList[chatId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>

      <Input
        fullWidth
        ref={inputRef}
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};
