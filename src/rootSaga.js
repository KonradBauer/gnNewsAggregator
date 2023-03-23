import { all } from "redux-saga/effects";
import { watchGetNews } from "./features/newsSaga";

export default function* rootSaga() {
  yield all([watchGetNews()]);
}
