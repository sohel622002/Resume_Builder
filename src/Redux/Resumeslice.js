import { createSlice } from "@reduxjs/toolkit";

import resumeData from "./ResumeData";

export const resumeSlice = createSlice({
  name: "Resume",
  initialState: resumeData,
  reducers: {
    changeName: (state, action) => {
      state.resumerName = action.payload;
    },
    changeRole: (state, action) => {
      state.rollForApply = action.payload;
    },
    changeTagline: (state, action) => {
      state.tageLine = action.payload;
    },
    changeContactDetail: (state, action) => {
      state.contactDetail.envelope = action.payload.email;
      state.contactDetail["location-dot"] = action.payload.city;
      state.contactDetail["mobile-screen-button"] = action.payload.phone;
      state.contactDetail.address = action.payload.address;
      state.contactDetail.country = action.payload.country;
    },
    changeEducationDetail : (state, action) => {
      state.Education = action.payload;
    },
    changeProjectDetail : (state, action) => {
      state.PersonalProjects = action.payload;
    }
  },
});

export const { changeName, changeRole, changeTagline, changeContactDetail, changeEducationDetail, changeProjectDetail } =
  resumeSlice.actions;

export default resumeSlice.reducer;
