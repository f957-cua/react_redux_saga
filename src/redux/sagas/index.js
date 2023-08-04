import { takeEvery, put, call, fork, spawn } from "@redux-saga/core/effects";
import { GET_NEWS } from "../constans.js";
import { getLatestNews, getPopularNews } from "../api/index.js";
import {
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
} from "../actions/actionCreator.js";

function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits));
  } catch (error) {
    yield put(setLatestNewsError(error));
  }
}

function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch (error) {
    yield put(setPopularNewsError(error));
  }
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
