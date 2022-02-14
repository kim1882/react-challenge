import { all } from "redux-saga/effects";
import { watchGetBusinessList } from "./business";

function* rootSaga() {
  yield all([watchGetBusinessList()]);
}

export default rootSaga;
