import { ChatPage, HomePage, ProfilePage } from "../pages";
import React from "react-dom/client";
import { ChatList } from "../components";
import { useRoutes } from "react-router-dom";

export function RouterList() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "chats",
          element: <ChatPage />,
          children: [
            { index: "", element: <div>Выберите чат</div> },
            { path: ":chatId", element: <ChatList /> },
          ],
        },
      ],
    },
    { path: "*", element: <div>Page doesn't exist</div> },
  ]);

  return routes;
}
