import { ChatList, Header, Layout, MessageList } from "../components";
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

export const ChatPage = () => {
  const [chatList] = useState([
    {
      name: "chat1",
      title: "Chat 1",
      id: 1,
      messages: [
        {
          author: "John",
          message: "Первое сообщение",
          date: new Date(),
        },
        {
          author: "John",
          message: "Первое сообщение",
          date: new Date(),
        },
      ],
    },
    {
      name: "chat2",
      title: "Chat 2",
      id: 2,
      messages: [
        {
          author: "John",
          message: "Первое сообщение",
          date: new Date(),
        },
        {
          author: "John",
          message: "Первое сообщение",
          date: new Date(),
        },
      ],
    },
  ]);
  return (
    <Layout>
      <ChatList />
      <Outlet />
    </Layout>
  );
};
