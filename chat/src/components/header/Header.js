import styled from "@emotion/styled";
import { themeMUI } from "../../theme-context";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme-context";
import { Button, FormGroup, FormControlLabel, Switch } from "@mui/material";

const HeaderClass = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
  background-color: ${(props) => themeMUI.palette.primary.main};
  border-bottom: 1px solid #000;
`;

const menu = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Chats",
    to: "/chats",
  },
  {
    title: "Profile",
    to: "/profile",
  },
];

export const Header = () => {
  const { theme, themeSetter } = useContext(ThemeContext);
  // const [themeMode, setThemeMode] = useState(false)

  const handleChange = (e) => {
    themeSetter(e.target.checked);
  };

  return (
    <HeaderClass>
      <FormControlLabel
        control={
          <Switch
            color="warning"
            onChange={handleChange}
            checked={theme === "light"}
          />
        }
        label={theme.name}
      />

      {menu.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
        >
          {item.title}
        </NavLink>
      ))}
    </HeaderClass>
  );
};
