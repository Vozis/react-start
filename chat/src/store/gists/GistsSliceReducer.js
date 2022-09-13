import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  gists: [],
  pending: false,
  error: null,
  searchedGists: [],
};

export const fetchAsyncGists = createAsyncThunk(
  "gists/fetchGists",
  async (page, thunkAPI) => {
    try {
      const { data } = await thunkAPI.extra.getPublicApi(page);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const gistsSliceReducer = createSlice({
  name: "gistsSlice",
  initialState,
  reducers: {
    fetchGists: (state, action) => {
      state.pending = true;
    },
    fetchGistsSuccess: (state, action) => {
      state.pending = false;
      state.error = null;
      state.gists = action.payload;
    },
    fetchGistsError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    searchGists: (state, action) => {
      const result = state.gists.filter((gist) =>
        gist.url.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.searchedGists = result;
    },
  },
  extraReducers: {
    [fetchAsyncGists.pending.type]: (state) => {
      state.pending = true;
    },
    [fetchAsyncGists.fulfilled.type]: (state, action) => {
      state.pending = false;
      state.error = null;
      state.gists = action.payload;
    },
    [fetchAsyncGists.rejected.type]: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export default gistsSliceReducer.reducer;
export const { fetchGists, fetchGistsSuccess, fetchGistsError, searchGists } =
  gistsSliceReducer.actions;

export const fetchSliceGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(fetchGists());
    const { data } = await api.getPublicApi(page);
    dispatch(fetchGistsSuccess(data));
  } catch (err) {
    dispatch(fetchGistsError(err.message));
  }
};
