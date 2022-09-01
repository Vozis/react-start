import { DELETE_CONVERSATION, CREATE_CONVERSATION } from "./types";

export const createConversation = () => {
  type: CREATE_CONVERSATION, payload;
};

export const deleteConversation = () => {
  type: DELETE_CONVERSATION, payload;
};
