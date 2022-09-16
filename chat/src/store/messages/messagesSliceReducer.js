import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {
  createMessagesApi,
  getMessagesApi,
  removeMessagesApi,
} from "../../api/messages";
import {
  createAsyncConversation,
  getAsyncConversations,
  removeAsyncConversation,
} from "../conversations/conversationsSliceReducer";

/*const initialState = {
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
};*/

const initialState = {
  messages: {},
  pending: false,
  error: null,
  pendingCreate: false,
  errorCreate: null,
  pendingRemove: false,
  errorRemove: null,
};

export const getAsyncMessages = createAsyncThunk(
  "messages/getMessages",
  async (_, thunkAPI) => {
    const messages = {};
    const snapshot = await thunkAPI.extra.getMessagesApi();
    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });
    return messages;
  }
);

export const createAsyncMessage = createAsyncThunk(
  "messages/createMessage",
  async ({ messageObj, chatId }, thunkAPI) => {
    try {
      await thunkAPI.extra.createMessagesApi(messageObj, chatId);
      return { messageObj, chatId };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeAsyncMessage = createAsyncThunk(
  "messages/removeMessage",
  async ({ message: messageObj, chatId }, thunkAPI) => {
    try {
      // console.log("message from removeAsyncMessage: ", messageObj, chatId);
      await thunkAPI.extra.removeMessagesApi(messageObj, chatId);
      return { messageObj };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const messagesSliceReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    /*createMessage: (state, action) => {
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
    },*/
    /*removeMessage(state, action) {
      const { chatId, messageId } = action.payload;

      const newMessages = state.messages[chatId].filter(
        (message) => message.id !== messageId
      );

      state.messages[chatId] = newMessages;
    },*/
  },
  extraReducers: {
    [getAsyncMessages.pending.type]: (state, action) => {
      state.pending = true;
    },
    [getAsyncMessages.fulfilled.type]: (state, action) => {
      state.pending = false;
      state.error = null;
      state.messages = action.payload;
    },
    [getAsyncMessages.rejected.type]: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    [createAsyncMessage.pending.type]: (state, action) => {
      state.pendingCreate = true;
    },
    [createAsyncMessage.fulfilled.type]: (state, action) => {
      state.pendingCreate = false;
      state.errorCreate = null;

      const { messageObj, chatId } = action.payload;
      const { message, author, date, id } = messageObj;

      if (!state.messages[chatId]) {
        state.messages[chatId] = [];
      }

      state.messages[chatId].push({
        author,
        message,
      });
    },
    [createAsyncMessage.rejected.type]: (state, action) => {
      state.pendingCreate = false;
      state.errorCreate = action.payload;
    },
    [removeAsyncMessage.pending.type]: (state, action) => {
      state.pendingRemove = true;
    },
    [removeAsyncMessage.fulfilled.type]: (state, action) => {
      state.pendingRemove = false;
      state.errorRemove = null;

      const { chatId, messageId } = action.payload;

      const newMessages = state.messages[chatId].filter(
        (message) => message.id !== messageId
      );
      state.messages[chatId] = newMessages;
    },
    [removeAsyncMessage.rejected.type]: (state, action) => {
      state.pendingRemove = false;
      state.errorCreate = action.payload;
    },
  },
});

export default messagesSliceReducer.reducer;
export const { createMessage, removeMessage } = messagesSliceReducer.actions;
