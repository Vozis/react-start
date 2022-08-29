import styles from "./layout.module.css";
import styled from "@emotion/styled";
import { themeMUI } from "../../theme-context";

const LayoutClass = styled.div`
  background: gray;
  width: 100%;
  height: calc(100% - 37px);
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

const MessagesClass = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${(props) => themeMUI.palette.secondary.main};

  & div:nth-of-type(1) {
    flex-grow: 1;
    overflow-y: auto;
    padding: 15px 10px;
  }

  & div:nth-of-type(2) {
    height: 50px;
    flex: none;
    background-color: #17212b;
    padding: 15px 10px;
  }
`;

const ChatsClass = styled.div`
  overflow-y: auto;
  width: 20%;
  background-color: ${(props) => themeMUI.palette.primary.main};
  border-right: 1px solid #000;
`;

export function Layout({ chats, messages }) {
  return (
    <LayoutClass>
      <Content>
        <ChatsClass>{chats}</ChatsClass>
        <MessagesClass>{messages}</MessagesClass>
      </Content>
    </LayoutClass>
  );
}
