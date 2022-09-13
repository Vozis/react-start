import { sendMessage } from "./actions";
import { createMessage } from "./messagesSliceReducer";

export const sendMessageWithBot = (chatId, message, author) => (dispatch) => {
  dispatch(createMessage({ chatId, message, author }));
  // dispatch(sendMessage(chatId, message));

  if (author === "User") {
    // if (message.author === "User") {
    const timerId = setTimeout(() => {
      /*  dispatch(
          sendMessage(chatId, {
            message: "Hello form thunk!",
            author: "Bot",
          })
        );*/
      dispatch(
        createMessage({
          chatId,
          message: "Hello form thunk!",
          author: "Bot",
        })
      );
    }, 1000);
    return function cancel() {
      clearInterval(timerId);
    };
  }
};
