import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { MessageList, Layout, Header, ChatList } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage, ChatPage, ProfilePage } from "./pages";
import Router from "./routes/Router";
import { CustomThemeProvider } from "./theme-context";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chats/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  </Provider>
);
