import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";

const baseReducer = combineReducers({
  user: userSlice,
});

export const setupStore = configureStore({
  reducer: baseReducer,
});
