import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: { status: null },
  reducers: {
    statusInital: (state) => {
      state.status = null;
    },
    statusLoading: (state) => {
      state.status = "loading";
    },
    statusSuccess: (state) => {
      state.status = "success";
    },
  },
});

export const { statusInital, statusLoading, statusSuccess } = newsSlice.actions;

export default newsSlice.reducer;
