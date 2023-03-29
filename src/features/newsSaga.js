import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import { getNews } from "./getNews";
import { statusSuccess, fetchNews, selectCountry, statusError, totalResults } from "./newsSlice";

export function* workGetNews() {
  try {
    const country = yield select(selectCountry);
    const polandNews = yield call(getNews, country);
    yield delay(2000);
    yield put(totalResults(polandNews.totalResults));
    yield put(statusSuccess(polandNews.articles));
  } catch (error) {
    yield put(statusError());
  }
}

export function* watchGetNews() {
  yield takeLatest(fetchNews.type, workGetNews);
}
