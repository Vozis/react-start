import { SEND_MESSAGE, sendMessageWithBot } from "../messages";

export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === "User"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessageWithBot(action.payload.chatId, {
          author: "Bot",
          message: "Hello from middleware bot :)",
        })
      );
    }, 500);
  }

  const result = next(action);

  return result;
};
