import styled from "@emotion/styled";
import { theme } from "../../index";

const HeaderClass = styled.div`
  flex: none;
  background-color: ${(props) => theme.palette.primary.main};
  border-bottom: 1px solid #000;
`;

export const Header = () => {
  return <HeaderClass>Header</HeaderClass>;
};
