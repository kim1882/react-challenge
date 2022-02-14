import { takeEvery, put, call } from "redux-saga/effects";
import { getBusinessList as getBusinessListService } from "../repositories/business";
import {
  getBusinessList,
  getBusinessListSuccess,
  getBusinessListFailure,
} from "../slices/business.slice";

export function* getBusinessListFn({
  payload,
}: ReturnType<typeof getBusinessList>) {
  try {
    const { data } = yield call(getBusinessListService);
    if (data) {
      const { businesses: businessList } = data;
      yield put(getBusinessListSuccess({ businessList }));
    } else {
      yield put(getBusinessListFailure());
    }
  } catch (e) {
    yield put(getBusinessListFailure());
  }
}

export function* watchGetBusinessList() {
  yield takeEvery(getBusinessList, getBusinessListFn);
}
