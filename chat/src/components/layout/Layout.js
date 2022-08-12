import styles from "./layout.module.css";
import styled from "@emotion/styled";
import { theme } from "../../index";

const LayoutClass = styled.div`
  background: gray;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
`;

const ChatsClass = styled.div`
  overflow-y: auto;
  width: 20%;
  background-color: ${(props) => theme.palette.primary.main};
  border-right: 1px solid #000;
`;

const MessagesClass = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${(props) => theme.palette.secondary.main};

  & div:nth-child(1) {
    flex-grow: 1;
    overflow-y: auto;
    padding: 15px 10px;
  }

  & div:nth-child(2) {
    height: 50px;
    flex: none;
    background-color: #17212b;
    padding: 15px 10px;
  }
`;

export function Layout({ header, chats, messages }) {
  return (
    <LayoutClass>
      <div>{header}</div>
      <Content>
        <ChatsClass>{chats}</ChatsClass>
        <MessagesClass>{messages}</MessagesClass>
      </Content>
    </LayoutClass>
  );
}
