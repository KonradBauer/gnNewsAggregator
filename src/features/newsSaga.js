import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import { getNews } from "./getNews";
import {
  statusSuccess,
  statusLoading,
  fetchNews,
  selectCountry,
  statusError,
  totalResults,
} from "./newsSlice";

export function* workGetNews() {
  try {
    const country = yield select(selectCountry);
    const news = yield call(getNews, country);
    yield put(statusLoading());
    yield delay(2000);
    yield put(totalResults(news.totalResults));
    yield put(statusSuccess(news.articles));
  } catch (error) {
    yield put(statusError());
  }
}

export function* watchGetNews() {
  yield takeLatest(fetchNews.type, workGetNews);
}
