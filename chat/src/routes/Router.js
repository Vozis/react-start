import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PostPage, ProfilePage, ChatPage } from "../pages";
import { ChatList, Layout, MessageList } from "../components";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<PostPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chats" element={<ChatPage />}>
            <Route
              index
              element={
                <div>
                  <h1>Выберите чат</h1>
                </div>
              }
            />
            <Route
              path=":chatsId"
              element={<MessageList chatList={props.chatList} />}
            />
          </Route>
          <Route path="*" element={<div>Page doesn't exist</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
