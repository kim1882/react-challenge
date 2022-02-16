import { all } from "redux-saga/effects";
import {
  watchCreateBusiness,
  watchDeleteBusiness,
  watchGetBusinessList,
  watchUpdateBusiness,
  watchCreateBusinessPerson,
  watchGetBusinessPersonsList,
  watchUpdateBusinessPerson,
  watchDeleteBusinessPerson,
} from "./business";

function* rootSaga() {
  yield all([
    watchCreateBusiness(),
    watchGetBusinessList(),
    watchUpdateBusiness(),
    watchDeleteBusiness(),
    watchCreateBusinessPerson(),
    watchGetBusinessPersonsList(),
    watchUpdateBusinessPerson(),
    watchDeleteBusinessPerson(),
  ]);
}

export default rootSaga;
