import { takeEvery, put, call, fork } from "@redux-saga/core/effects";
import { GET_NEWS } from "../constans.js";
import { getLatestNews, getPopularNews } from "../api/index.js";
import { setLatestNews, setPopularNews } from "../actions/actionCreator.js";

function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, "react");
  yield put(setLatestNews(hits));
}

function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(setPopularNews(hits));
}

function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
