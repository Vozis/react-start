import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import profileStudyReducer, { profileReducer } from "./profile/reducer";
import counterSliceReducer from "./counter/counterSliceReducer";
import profileSliceReducer from "./profile/profileSliceReducer";
import { counterReducer } from "./counter";
import { conversationsReducer } from "./conversations";
import conversationsSliceReducer from "./conversations/conversationsSliceReducer";
import { messagesReducer } from "./messages";
import messagesSliceReducer from "./messages/messagesSliceReducer";

// ========================== Create Store=========================

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  })
);

// ========================== Configure Store 1 =========================

const rootReducer = combineReducers({
  counter: counterSliceReducer,
  profile: profileSliceReducer,
  profileStudy: profileStudyReducer,
  conversations: conversationsSliceReducer,
  messages: messagesSliceReducer,
});

export const store2 = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// ========================== Configure Store 2 =========================

// const studyReducer = combineReducers({
//   profile: profileStudyReducer,
//   counter: counterReducer,
// });
//
// export const store = configureStore({
//   reducer: studyReducer,
// });
