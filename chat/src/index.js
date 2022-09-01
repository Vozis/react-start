import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { MessageList, Layout, Header, ChatList } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage, ChatPage, ProfilePage } from "./pages";
import { CustomThemeProvider, ThemeContext } from "./theme-context";
import { store, store2 } from "./store";
import { useContext } from "react";
import Router from "./routes/Router";
import { setupStore } from "./store/store";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Provider store={store2}>
      <CustomThemeProvider initialTheme={theme}>
        {/*<Router />*/}
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
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
