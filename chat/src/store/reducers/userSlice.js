import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

const userSliceReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    /*usersFetching(state, action) {
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
    },*/
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSliceReducer.reducer;
export const { usersFetching, usersFetchingSuccess, usersFetchingError } =
  userSliceReducer.actions;
