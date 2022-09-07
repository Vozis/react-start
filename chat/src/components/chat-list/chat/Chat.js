import React, { useContext } from "react";
import {
  Button,
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

export const Chat = memo(({ title, selected, deleteConversationByName }) => {
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
        <Button
          variant={"contained"}
          size={"small"}
          sx={{
            color: theme.theme.color,
            backgroundColor: themeMui.palette.secondary.light,
          }}
          onClick={(event) => deleteConversationByName(title, event)}
        >
          X
        </Button>
      </ListItem>
    </CustomNavLink>
  );
});
