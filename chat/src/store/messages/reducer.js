import { nanoid } from "nanoid";
import { DELETE_MESSAGE, SEND_MESSAGE } from "./types";

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

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] ?? []),
            { ...action.payload.message, date: new Date(), id: nanoid() },
          ],
        },
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: state.messages[action.payload.chatId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    default:
      return state;
  }
};
