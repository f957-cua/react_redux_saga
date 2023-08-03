import { take } from "@redux-saga/core/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from "../constans.js";

function* workerSaga() {}

function* watchClickSaga() {
  yield take(INCREASE_COUNT);
  console.log("request_1");
  yield take(DECREASE_COUNT);
  console.log("request_2");
}

export default function* rootSaga() {
  console.log("hello saga");
  yield watchClickSaga();
}
