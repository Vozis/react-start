import React, { useEffect, useState, useRef } from "react";
import { Message } from "./message";
import { Input, SendIcon } from "../styles";
import { InputAdornment } from "@mui/material";
import { useParams } from "react-router-dom";

export const MessageList = ({ chatList }) => {
  const params = useParams();
  console.log(params);

  const [messageList, setMessageList] = useState(
    chatList[params.chatsId].messages
  );
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const ref = useRef();

  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: new Date() },
      ]);
      inputRef.current.children[0].focus();
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
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
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            author: "Bot",
            message: "Hello from Bot",
            date: new Date(),
          },
        ]);
      }, 1500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  return (
    <>
      <div ref={ref}>
        {messageList.map((message, index) => (
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
