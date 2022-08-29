import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counter";

// export const store = configureStore();

export const store = createStore(combineReducers({ counter: counterReducer }));
