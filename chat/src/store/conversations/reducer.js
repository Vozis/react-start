import {CREATE_CONVERSATION, DELETE_CONVERSATION} from './types';

const initialState = {
  conversations: ['room1', 'room2', 'room3'],
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversation: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state, state.conversations.filter(conversation => {
        
        })
      };
    default:
      return state;
  }
};
