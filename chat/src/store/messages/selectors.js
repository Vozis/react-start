export const messagesSelector = (chatId) => (state) =>
  state.messages.messages[chatId] ?? [];
