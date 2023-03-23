import { call, put, takeEvery } from "redux-saga/effects";
import {
  getArgentinaNews,
  getMexicoNews,
  getPolandNews,
  getSingaporeNews,
  getThailandNews,
} from "./getNews";
import { statusLoading, statusSuccess } from "./newsSlice";

export function* workGetNews({ payload: articles }) {
  try {
    const polandNews = yield call(getPolandNews(articles));
    const mexicoNews = yield call(getMexicoNews(articles));
    const argentinaNews = yield call(getArgentinaNews(articles));
    const singaporeNews = yield call(getSingaporeNews(articles));
    const thailandNews = yield call(getThailandNews(articles));
    yield put(statusSuccess(polandNews, mexicoNews, argentinaNews, singaporeNews, thailandNews));
  } catch (error) {
    yield put();
  }
}

export function* watchGetNews() {
  yield takeEvery(statusLoading.type, workGetNews);
}
