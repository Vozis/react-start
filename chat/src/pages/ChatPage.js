import { ChatList, Header, Layout, MessageList } from "../components";
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout messages={<div>выберите чат</div>} chats={<ChatList />} />
        }
      />
      <Route
        path=":chatId"
        element={<Layout messages={<MessageList />} chats={<ChatList />} />}
      />
    </Routes>
  );
};
