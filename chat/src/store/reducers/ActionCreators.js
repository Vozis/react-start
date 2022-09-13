import axios from "axios";
import userSlice, {
  usersFetching,
  usersFetchingError,
  usersFetchingSuccess,
} from "./userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

/*export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(usersFetching());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(usersFetchingSuccess(response.data));
  } catch (err) {
    dispatch(usersFetchingError(err.message));
  }
};*/

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
