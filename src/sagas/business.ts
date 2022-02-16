import { takeEvery, put, call } from "redux-saga/effects";
import {
  createBusiness as createBusinessService,
  getBusinessList as getBusinessListService,
} from "../repositories/business";
import {
  createBusiness,
  createBusinessSuccess,
  createBusinessFailure,
  getBusinessList,
  getBusinessListSuccess,
  getBusinessListFailure,
} from "../slices/business.slice";

export function* createBusinessFn({
  payload,
}: ReturnType<typeof createBusiness>) {
  try {
    const { name } = payload;
    const { data } = yield call(createBusinessService, name);
    if (data) {
      yield put(getBusinessList());
      yield put(createBusinessSuccess());
    } else {
      yield put(createBusinessFailure());
    }
  } catch (e) {
    yield put(createBusinessFailure());
  }
}

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

export function* watchCreateBusiness() {
  yield takeEvery(createBusiness, createBusinessFn);
}
export function* watchGetBusinessList() {
  yield takeEvery(getBusinessList, getBusinessListFn);
}
