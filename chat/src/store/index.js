import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import profileStudyReducer from "./profile/reducer";
import counterSliceReducer from "./counter/counterSliceReducer";
import profileSliceReducer from "./profile/profileSliceReducer";

// ========================== Create Store=========================

// export const store = createStore(
//   combineReducers({ counter: counterReducer, profile: profileReducer })
// );

// ========================== Configure Store 1 =========================

const rootReducer = combineReducers({
  counter: counterSliceReducer,
  profile: profileSliceReducer,
  profileStudy: profileStudyReducer,
});

export const store2 = configureStore({
  reducer: rootReducer,
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
