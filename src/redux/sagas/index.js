import { takeEvery, put, call, fork, all } from "@redux-saga/core/effects";
import { GET_LATEST_NEWS, GET_POPULAR_NEWS } from "../constans.js";
import { getLatestNewsAPI, getPopularNewsAPI } from "../api/index.js";
import {
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
} from "../actions/actionCreator.js";

function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNewsAPI, "react");
    yield put(setLatestNews(hits));
  } catch (error) {
    yield put(setLatestNewsError(error));
  }
}

function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNewsAPI);
    yield put(setPopularNews(hits));
  } catch (error) {
    yield put(setPopularNewsError(error));
  }
}

function* watchLatestSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

function* watchPopularSaga() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

function* watchClickSaga() {
  yield all([fork(watchLatestSaga), fork(watchPopularSaga)]);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
