import styled from "@emotion/styled";
import { Input as DefaultInput } from "@mui/material";
import { Send } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const Input = styled(DefaultInput)`
  color: ${(ctx) => {
    console.log("ctx MUI:", ctx);
    return "#9a9fa1";
  }};
  padding: 10px 15px;
  font-size: 20px;
`;

export const SendIcon = styled(Send)`
  cursor: pointer;
  color: #2b5278;
`;

export const CustomNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.text.main};
  text-decoration: none;
`;
