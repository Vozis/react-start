import { get, child, ref } from "firebase/database";
import { database } from "./firebase";

export const getConversationApi = () => {
  return get(child(ref(database), "conversations"));
};
