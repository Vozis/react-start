import styled from "@emotion/styled";
import { theme } from "../../index";
import { NavLink } from "react-router-dom";

const HeaderClass = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  justify-content: center;
  background-color: ${(props) => theme.palette.primary.main};
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
  return (
    <HeaderClass>
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
