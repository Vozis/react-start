import { sendMessage } from "./actions";
import { createAsyncMessage, createMessage } from "./messagesSliceReducer";
import { nanoid } from "nanoid";

export const sendMessageWithBot = (messageObj, chatId) => (dispatch) => {
  dispatch(createAsyncMessage({ messageObj, chatId }));

  const { message, author } = messageObj;

  setTimeout(() => {
    if (author === "User") {
      dispatch(
        createAsyncMessage({
          messageObj: {
            message: "Hello form thunk!",
            author: "Bot",
          },
          chatId,
        })
      );
    }
  }, 500);
};
