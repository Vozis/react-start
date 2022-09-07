import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementCount(state, action) {
      state.count += action.payload;
    },
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
// export const { incrementCount } = userSlice.actions;
