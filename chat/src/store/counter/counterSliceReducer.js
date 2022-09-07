import { createSlice } from "@reduxjs/toolkit";

const counterSliceReducer = createSlice({
  name: "countChanger",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= action.payload;
    },
  },
});

export default counterSliceReducer.reducer;
export const { increment, decrement } = counterSliceReducer.actions;
