import { takeEvery, put, call } from "redux-saga/effects";
import {
  createBusiness as createBusinessService,
  getBusinessList as getBusinessListService,
  updateBusiness as updateBusinessService,
  deleteBusiness as deleteBusinessService,
} from "../repositories/business";
import {
  createBusiness,
  createBusinessSuccess,
  createBusinessFailure,
  getBusinessList,
  getBusinessListSuccess,
  getBusinessListFailure,
  updateBusiness,
  updateBusinessSuccess,
  updateBusinessFailure,
  deleteBusiness,
  deleteBusinessSuccess,
  deleteBusinessFailure,
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

export function* updateBusinessFn({
  payload,
}: ReturnType<typeof updateBusiness>) {
  try {
    const { id, name } = payload;
    const { data } = yield call(updateBusinessService, id, name);
    if (data) {
      const { businessId, name } = data;
      yield put(updateBusinessSuccess({ businessId, name }));
    } else {
      yield put(updateBusinessFailure());
    }
  } catch (e) {
    yield put(updateBusinessFailure());
  }
}

export function* deleteBusinessFn({
  payload,
}: ReturnType<typeof deleteBusiness>) {
  try {
    const { id } = payload;
    const { data } = yield call(deleteBusinessService, id);
    if (data) {
      yield put(getBusinessList());
      yield put(deleteBusinessSuccess());
    } else {
      yield put(deleteBusinessFailure());
    }
  } catch (e) {
    yield put(deleteBusinessFailure());
  }
}

export function* watchCreateBusiness() {
  yield takeEvery(createBusiness, createBusinessFn);
}
export function* watchGetBusinessList() {
  yield takeEvery(getBusinessList, getBusinessListFn);
}
export function* watchUpdateBusiness() {
  yield takeEvery(updateBusiness, updateBusinessFn);
}
export function* watchDeleteBusiness() {
  yield takeEvery(deleteBusiness, deleteBusinessFn);
}
