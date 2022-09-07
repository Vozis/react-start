import axios from "axios";
import { userSlice } from "./userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

/*export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (err) {
    dispatch(userSlice.actions.usersFetchingError(err.message));
  }
};*/

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);
