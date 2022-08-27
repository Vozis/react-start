import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, Header, ChatList } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ChatPage, ProfilePage } from "./pages";
import Router from "./routes/Router";

/*const App = () => {
  return (
    <div>
      <MessageList />
    </div>
  );
};*/

export const theme = createTheme({
  palette: {
    primary: {
      main: "#17212b",
    },
    secondary: {
      main: "#0e1621",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chats/*" element={<ChatPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
