import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {
  createConversationApi,
  getConversationApi,
  removeConversationApi,
} from "../../api/conversations";

const initialState = {
  conversations: [],
  pending: false,
  error: null,
  pendingCreate: false,
  errorCreate: null,
  pendingRemove: false,
  errorRemove: null,
};

export const getAsyncConversations = createAsyncThunk(
  "conversations/getConversations",
  async (_, thunkAPI) => {
    const newConversations = [];
    try {
      const snapshot = await thunkAPI.extra.getConversationApi();
      snapshot.forEach((snap) => {
        newConversations.push(snap.val());
      });
      // console.log("conversations from server", newConversations);
      return newConversations;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const createAsyncConversation = createAsyncThunk(
  "conversations/createConversations",
  async (conversation, thunkAPI) => {
    try {
      await thunkAPI.extra.createConversationApi(conversation);
      return conversation;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const removeAsyncConversation = createAsyncThunk(
  "conversations/removeConversations",
  async (conversation, thunkAPI) => {
    try {
      await thunkAPI.extra.removeConversationApi(conversation);
      return conversation;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const conversationsSliceReducer = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    /*removeConversation(state, action) {
      const newConversations = state.conversations.filter(
        (conversation) => conversation !== action.payload
      );
      state.conversations = newConversations;
      // console.log(current(state));
    },*/
    /*addConversation(state, action) {
      state.conversations.push(action.payload);
    },*/
  },
  extraReducers: {
    [getAsyncConversations.pending.type]: (state, action) => {
      state.pending = true;
    },
    [getAsyncConversations.fulfilled.type]: (state, action) => {
      state.pending = false;
      state.error = null;
      state.conversations = action.payload;
    },
    [getAsyncConversations.rejected.type]: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    [createAsyncConversation.pending.type]: (state, action) => {
      state.pendingCreate = true;
    },
    [createAsyncConversation.fulfilled.type]: (state, action) => {
      state.pendingCreate = false;
      state.errorCreate = null;
      state.conversations.push(action.payload);
    },
    [createAsyncConversation.rejected.type]: (state, action) => {
      state.pendingCreate = false;
      state.errorCreate = action.payload;
    },
    [removeAsyncConversation.pending.type]: (state, action) => {
      state.pendingRemove = true;
    },
    [removeAsyncConversation.fulfilled.type]: (state, action) => {
      state.pendingRemove = false;
      state.errorRemove = null;

      const newConversations = state.conversations.filter(
        (conversation) => conversation !== action.payload
      );
      state.conversations = newConversations;
    },
    [removeAsyncConversation.rejected.type]: (state, action) => {
      state.pendingRemove = false;
      state.errorCreate = action.payload;
    },
  },
});

export default conversationsSliceReducer.reducer;
export const { removeConversation, addConversation } =
  conversationsSliceReducer.actions;
