import { createSlice, current } from "@reduxjs/toolkit";

const profileSliceReducer = createSlice({
  name: "profile",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isVisibleProfile: false,
  },
  reducers: {
    updateVal(state, action) {
      const { firstName, lastName, email, password } = action.payload;
      Object.assign(state, { firstName, lastName, email, password });
      console.log(current(state));
    },
    toggleVisibleProfile(state) {
      state.isVisibleProfile = !state.isVisibleProfile;
    },
  },
});

export default profileSliceReducer.reducer;
export const { updateVal, toggleVisibleProfile } = profileSliceReducer.actions;
