import React, { useEffect, useState } from "react";
import { Message } from "./message";
import { logDOM } from "@testing-library/react";

export function MessageList() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setError("");
    setValue(event.target.value);
  };

  const addMessageToList = () => {
    if (value) {
      setMessageList([
        ...messageList,
        {
          author: "User",
          text: value,
          id: new Date().getTime(),
        },
      ]);
      setValue("");
    } else {
      setError("Поле не должны быть пустым ");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessageToList();
    }
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            author: "Bot",
            text: "Привет от бота",
            id: new Date().getTime(),
          },
        ]);
      }, 1500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [messageList]);

  return (
    <div>
      <h3>Message List</h3>
      <form className={"flex gap-4"} onSubmit={handleSubmit}>
        <input
          className={"input"}
          placeholder={"text..."}
          value={value}
          onChange={handleChange}
          onKeyPress={handlePressInput}
        />
        <button
          className={"btn btn-primary btn-send"}
          onClick={addMessageToList}
        >
          Добавить в список
        </button>
        <span>{error}</span>
      </form>
      <hr />
      <div>
        <h3>Список сообщений</h3>
        <ul>
          {messageList.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </ul>
      </div>
    </div>
  );
}
