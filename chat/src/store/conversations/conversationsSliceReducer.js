import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  conversations: ["chat1", "chat2", "chat3"],
};

const conversationsSliceReducer = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    removeConversation(state, action) {
      const newConversations = state.conversations.filter(
        (conversation) => conversation !== action.payload
      );
      state.conversations = newConversations;
      // console.log(current(state));
    },
    addConversation(state, action) {
      state.conversations.push(action.payload);
    },
  },
});

export default conversationsSliceReducer.reducer;
export const { removeConversation, addConversation } =
  conversationsSliceReducer.actions;
