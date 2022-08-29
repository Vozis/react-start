import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { memo } from "react";
import { NavLink, useParams } from "react-router-dom";

export const Chat = memo(({ title, selected }) => {
  return (
    <NavLink to={`/chats/${title}`}>
      <ListItem disablePadding>
        <ListItemButton
          component={"button"}
          selected={selected}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#0F1621",
            },
          }}
        >
          <ListItemIcon>
            <ChatIcon className={"text-white"} />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
});
