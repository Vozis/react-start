import {
  getConversationError,
  getConversationStart,
  getConversationSuccess,
} from "./actions";

export const getConversation = () => async (dispatch, _, api) => {
  const conversations = [];
  try {
    dispatch(getConversationStart());

    const snapshot = await api.getConversationApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });
    dispatch(getConversationSuccess(conversations));
  } catch (err) {
    dispatch(getConversationError(err));
  }
};
