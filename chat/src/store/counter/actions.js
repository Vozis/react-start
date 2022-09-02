import { DECREMENT, INCREMENT } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const countIncrement = createAction(INCREMENT);
