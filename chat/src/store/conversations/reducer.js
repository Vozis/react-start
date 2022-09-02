import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversations: ["chat1", "chat2", "chat3"],
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...(state.conversations || []), action.payload],
      };
    // return {
    //   ...state,
    //   conversations: state.conversations.concat(action.payload),
    // };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    default:
      return state;
  }
};
