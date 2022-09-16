import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Message } from "./message";
import { Input, SendIcon } from "../styles";
import { InputAdornment } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { messagesSelector, sendMessageWithBot } from "../../store/messages";
import {
  createMessage,
  sendSliceMessage,
} from "../../store/messages/messagesSliceReducer";
import { nanoid } from "nanoid";

export const MessageList = () => {
  const { chatId } = useParams();
  const getMessages = useMemo(() => messagesSelector(chatId), [chatId]);
  const messages = useSelector(getMessages);

  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const ref = useRef();
  const dispatch = useDispatch();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessageWithBot({ message, author }, chatId));
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
            {value && <SendIcon onClick={() => send(value)} />}
          </InputAdornment>
        }
      />
    </>
  );
};
