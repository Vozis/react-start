import { nanoid } from "nanoid";
import { createSlice, current } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const initialState = {
  messages: {
    chat1: [
      {
        author: "User",
        message: "Первое сообщение в первом чате",
        date: new Date(),
        id: nanoid(),
      },
      {
        author: "Bot",
        message: "Ответ на первое сообщение в первом чате",
        date: new Date(),
        id: nanoid(),
      },
    ],
  },
};

const messagesSliceReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    createMessage: (state, action) => {
      const { chatId, message, author } = action.payload;

      if (!state.messages[chatId]) {
        state.messages[chatId] = [];
      }

      state.messages[chatId].push({
        author,
        message,
        date: new Date(),
        id: nanoid(),
      });
    },
    removeMessage(state, action) {
      const { chatId, messageId } = action.payload;

      const newMessages = state.messages[chatId].filter(
        (message) => message.id !== messageId
      );

      state.messages[chatId] = newMessages;
    },
  },
});

export default messagesSliceReducer.reducer;
export const { createMessage, removeMessage } = messagesSliceReducer.actions;

export function sendSliceMessage(chatId, message, author, timeout = 1000) {
  return async (dispatch, getState) => {
    const obj = {
      chatId,
      message,
      author,
    };

    setTimeout(() => dispatch(createMessage(obj)), timeout);
  };
}
