import { takeEvery, put, call } from "@redux-saga/core/effects";
import { GET_LATEST_NEWS } from "../constans.js";
import { getLatestNews } from "../api/index.js";
import { setLatestNews } from "../actions/actionCreator.js";

function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, "react");
  yield put(setLatestNews(hits));
}

function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
