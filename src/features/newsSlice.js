import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: "initial",
    news: [],
  },
  reducers: {
    statusLoading: () => ({
      news: [],
      status: "loading",
    }),
    statusSuccess: (_, { payload: news }) => ({
      news,
      status: "success",
    }),
    statusError: () => ({ news: null, status: "error" }),
  },
});

export const { statusInital, statusLoading, statusSuccess } = newsSlice.actions;

export const selectNews = (state) => state.news;

export const selectNewsStatus = (state) => selectNews(state).status;

export const selectNewsData = (state) => selectNews(state).news;

export default newsSlice.reducer;
