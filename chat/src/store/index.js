import { combineReducers, createStore } from "redux";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import profileStudyReducer, { profileReducer } from "./profile/reducer";
import counterSliceReducer from "./counter/counterSliceReducer";
import profileSliceReducer from "./profile/profileSliceReducer";
import { counterReducer } from "./counter";
import { conversationsReducer } from "./conversations";
import conversationsSliceReducer from "./conversations/conversationsSliceReducer";
import { messagesReducer } from "./messages";
import messagesSliceReducer, {
  createAsyncMessage,
} from "./messages/messagesSliceReducer";
import { botMessage, timeScheduler } from "./middlewares";
import thunk from "redux-thunk";

import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { gistsReducer } from "./gists";
import { getPublicApi, searchGistsByName } from "../api/gists";
import gistsSliceReducer from "./gists/GistsSliceReducer";
import { gistsAPI } from "./gists/GistsQuery";

import {
  createConversationApi,
  getConversationApi,
  removeConversationApi,
} from "../api/conversations";
import {
  createMessagesApi,
  getMessagesApi,
  removeMessagesApi,
} from "../api/messages";

// ========================== API =========================

const api = {
  getPublicApi,
  searchGistsByName,
  getConversationApi,
  createConversationApi,
  removeConversationApi,
  getMessagesApi,
  createMessagesApi,
  removeMessagesApi,
};

/*setTimeout(() => {
  createMessagesApi(
    {
      author: "User",
      message: "Первое сообщение в первом чате",
      date: new Date(),
      id: nanoid(),
    },
    "chat1"
  );
}, 5000);*/

// ========================== Persist reducer=========================

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["messages"],
  transforms: [
    createTransform(JSON.stringify, (toRehydrate) =>
      JSON.parse(toRehydrate, (key, value) =>
        typeof value === "string" &&
        value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
          ? new Date(value)
          : value
      )
    ),
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  })
);

// ========================== Create Store=========================

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(timeScheduler, thunk.withExtraArgument(api), logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);

// ========================== Configure Store 1 =========================

const rootReducer = combineReducers({
  counter: counterSliceReducer,
  profile: profileSliceReducer,
  profileStudy: profileStudyReducer,
  conversations: conversationsSliceReducer,
  messages: messagesSliceReducer,
  gists: gistsSliceReducer,
  // [gistsAPI.reducerPath]: gistsAPI.reducer,
});

const middlewares = [gistsAPI.middleware, timeScheduler, botMessage, logger];

export const store2 = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }).concat(middlewares),
});
