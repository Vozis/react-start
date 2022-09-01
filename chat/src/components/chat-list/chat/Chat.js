import React, { useContext } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { memo } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CustomNavLink } from "../../styles";
import { ThemeContext } from "../../../theme-context";

export const Chat = memo(({ title, selected }) => {
  const { theme, themeMui } = useContext(ThemeContext);

  return (
    <CustomNavLink to={`/chats/${title}`}>
      <ListItem disablePadding>
        <ListItemButton
          component={"button"}
          selected={selected}
          sx={{
            "&.Mui-selected": {
              backgroundColor:
                theme.name === "light"
                  ? themeMui.palette.primary.dark
                  : themeMui.palette.primary.light,
            },
          }}
        >
          <ListItemIcon>
            <ChatIcon
              sx={{
                color: theme.theme.color,
              }}
            />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </CustomNavLink>
  );
});
