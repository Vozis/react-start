import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  firstName: "firstName",
  lastName: "lastName",
  phone: "phone",
  isVisibleProfile: true,
};

// ========================== Switch Reducer =========================

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    case UPDATE_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// ========================== Slice Reducer =========================

const profileStudyReducer = createSlice({
  name: "profile-study",
  initialState: initialState,
  reducers: {
    toggleIsVisibleProfileStudy(state) {
      state.isVisibleProfile = !state.isVisibleProfile;
    },
    updateProfileStudy(state, action) {
      const { firstName, lastName, phone } = action.payload;
      Object.assign(state, { firstName, lastName, phone });
      // state += action.payload;
      console.log("state", current(state));
    },
  },
});

export default profileStudyReducer.reducer;
export const { toggleIsVisibleProfileStudy, updateProfileStudy } =
  profileStudyReducer.actions;
