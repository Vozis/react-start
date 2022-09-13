import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./reducers/userSlice";
import { postAPI } from "../services/postsService";

const rootReducer = combineReducers({
  userReducer: userSliceReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});
