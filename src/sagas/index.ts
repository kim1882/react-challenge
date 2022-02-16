import { all } from "redux-saga/effects";
import {
  watchCreateBusiness,
  watchDeleteBusiness,
  watchGetBusinessList,
  watchUpdateBusiness,
} from "./business";

function* rootSaga() {
  yield all([
    watchCreateBusiness(),
    watchGetBusinessList(),
    watchUpdateBusiness(),
    watchDeleteBusiness(),
  ]);
}

export default rootSaga;
