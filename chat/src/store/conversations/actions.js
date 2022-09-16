import {
  CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  GET_CONVERSATION_ERROR,
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_START,
} from "./types";
import { GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS } from "../gists";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});
export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

export const getConversationStart = () => ({
  type: GET_CONVERSATION_START,
});

export const getConversationSuccess = (conversations) => ({
  type: GET_CONVERSATION_SUCCESS,
  payload: conversations,
});

export const getConversationError = (error) => ({
  type: GET_CONVERSATION_ERROR,
  payload: error,
});
