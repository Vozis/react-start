import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme-context";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { CustomNavLink } from "../styles";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";

const HeaderClass = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
  background-color: ${({ theme }) => theme.palette.primary.light};
`;

const menuWithoutSession = [
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "Registration",
    to: "/registration",
  },
];

const menuWithSession = [
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
  {
    title: "Gists",
    to: "/gists",
  },
];

export const Header = ({ email }) => {
  const { theme, themeSetter, themeMui } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme.name === "light" ? true : false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    themeSetter(e.target.checked === true ? "light" : "dark");
  };
  // console.log("theme", theme);
  // console.log("themeMui", themeMui);

  return (
    <HeaderClass>
      {!!email && (
        <div>
          <h1>USER: {email}</h1>
          <Button onClick={() => signOut(auth)}>Выйти</Button>
        </div>
      )}
      <FormControlLabel
        sx={{
          color: theme.theme.color,
        }}
        control={
          <Switch color="success" onChange={handleChange} checked={checked} />
        }
        label={theme.name}
      />
      {!!email &&
        menuWithSession.map((item) => (
          <CustomNavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : " ",
              };
            }}
          >
            {item.title}
          </CustomNavLink>
        ))}

      {!email &&
        menuWithoutSession.map((item) => (
          <CustomNavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : " ",
              };
            }}
          >
            {item.title}
          </CustomNavLink>
        ))}
    </HeaderClass>
  );
};
