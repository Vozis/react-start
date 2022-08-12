import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, Header, ChatList } from "./components";

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
    <Layout
      messages={<MessageList />}
      header={<Header />}
      chats={<ChatList />}
    />
  </ThemeProvider>
);
