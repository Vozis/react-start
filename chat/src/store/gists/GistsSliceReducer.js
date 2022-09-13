import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  gists: [],
  pending: false,
  error: null,
  searchedLocalGists: [],
  searchedGists: [],
  searchPending: false,
  searchError: false,
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

export const searchAsyncGists = createAsyncThunk(
  "gists/searchGists",
  async (name = "bogdanq", thunkAPI) => {
    try {
      const { data } = await thunkAPI.extra.searchGistsByName(name);
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
    searchLocalGists: (state, action) => {
      const result = state.gists.filter((gist) =>
        gist.url.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.searchedLocalGists = result;
    },
    searchGists: (state, action) => {
      state.searchPending = true;
    },
    searchGistsSuccess: (state, action) => {
      state.searchPending = false;
      state.searchError = null;
      state.searchedGists = action.payload;
    },
    searchGistsError: (state, action) => {
      state.searchPending = false;
      state.searchError = action.payload;
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
    [searchAsyncGists.pending.type]: (state) => {
      state.searchPending = true;
    },
    [searchAsyncGists.fulfilled.type]: (state, action) => {
      state.searchPending = false;
      state.error = null;
      state.searchedGists = action.payload;
    },
    [searchAsyncGists.rejected.type]: (state, action) => {
      state.searchPending = false;
      state.error = action.payload;
    },
  },
});

export default gistsSliceReducer.reducer;
export const {
  fetchGists,
  fetchGistsSuccess,
  fetchGistsError,
  searchLocalGists,
  searchGists,
  searchGistsError,
  searchGistsSuccess,
} = gistsSliceReducer.actions;

export const fetchSliceGists = (page) => async (dispatch, _, api) => {
  try {
    dispatch(fetchGists());
    const { data } = await api.getPublicApi(page);
    dispatch(fetchGistsSuccess(data));
  } catch (err) {
    dispatch(fetchGistsError(err.message));
  }
};
