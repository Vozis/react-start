import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./global.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList, Layout, Header, ChatList } from "./components";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
  useLocation,
  useLinkClickHandler,
  useNavigate,
} from "react-router-dom";
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
    <Router />
    {/*  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chat/*" element={<ChatPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>*/}
  </ThemeProvider>
);

/*
root.render(
  <ThemeProvider theme={theme}>
    <Layout
      messages={<MessageList />}
      header={<Header />}
      chats={<ChatList />}
    />
  </ThemeProvider>
);*/
