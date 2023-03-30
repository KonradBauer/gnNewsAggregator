import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: "initial",
    news: [],
    country: null,
    totalResults: null,
  },
  reducers: {
    statusLoading: () => ({
      news: null,
      status: "loading",
    }),
    statusSuccess: (state, { payload: news }) => {
      state.news = news;
      state.status = "success";
    },
    statusError: () => ({ news: null, status: "error" }),
    fetchNews: () => {},
    countryChange: (state, { payload: country }) => {
      state.country = country;
    },
    totalResults: (state, { payload: totalResults }) => {
      state.totalResults = totalResults;
    },
  },
});

export const { statusError, statusLoading, statusSuccess, fetchNews, totalResults, countryChange } =
  newsSlice.actions;

export const selectNews = (state) => state.news;

export const selectNewsStatus = (state) => selectNews(state).status;

export const selectNewsData = (state) => selectNews(state).news;

export const selectCountry = (state) => selectNews(state).country;

export const selectTotalResults = (state) => selectNews(state).totalResults;

export default newsSlice.reducer;
