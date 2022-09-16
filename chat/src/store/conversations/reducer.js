import {
  CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_ERROR,
  GET_CONVERSATION_START,
} from "./types";
import {
  GET_GISTS_ERROR,
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  SEARCH_GISTS_START,
} from "../gists";

const initialState = {
  // conversations: ["chat1", "chat2", "chat3"],
  conversations: [],
  pending: false,
  error: null,
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
    case GET_CONVERSATION_START:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case GET_CONVERSATION_SUCCESS:
      return {
        ...state,
        pending: false,
        conversations: action.payload,
      };
    case GET_CONVERSATION_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
