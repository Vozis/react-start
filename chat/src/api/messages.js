import { get, child, ref, push, remove } from "firebase/database";
import { database } from "./firebase";
// import { nanoid } from "nanoid";

export const getMessagesApi = () => {
  return get(child(ref(database), "messages"));
};

export const createMessagesApi = (message, chatId) => {
  return push(child(ref(database), `messages/${chatId}`), {
    ...message,
    // id: nanoid(),
    date: String(new Date()),
  });
};

export const removeMessagesApi = (message, chatId) => {
  return remove(child(ref(database), `messages/${chatId}/${message}`));
};

/*
export const normalizeData = async () => {
  const messages = {};
  const snapshot = await getMessagesApi();

  snapshot.forEach((snap) => {
    messages[snap.key] = Object.values(snap.val());
  });

  console.log("messages:", messages);
};
*/
