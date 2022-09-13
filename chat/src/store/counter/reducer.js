import { DECREMENT, INCREMENT } from "./types";
import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const countReducer = createReducer(initialState, (builder) => {
  builder.addCase(INCREMENT, (state, action) => {
    state.count += 1;
  });
});
