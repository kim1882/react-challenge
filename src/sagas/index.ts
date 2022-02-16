import { all } from "redux-saga/effects";
import { watchCreateBusiness, watchGetBusinessList } from "./business";

function* rootSaga() {
  yield all([watchGetBusinessList(), watchCreateBusiness()]);
}

export default rootSaga;
