import { ChatList, Header, Layout, MessageList } from "../components";
import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { getAsyncConversations } from "../store/conversations/conversationsSliceReducer";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncMessages } from "../store/messages/messagesSliceReducer";

export const ChatPage = () => {
  const { conversations } = useSelector((state) => state.conversations);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chats");
      }
    };
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    if (!conversations.length) {
      dispatch(getAsyncConversations());
    }
  }, [dispatch, conversations]);

  useEffect(() => {
    dispatch(getAsyncMessages());
  });

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
