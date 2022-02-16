import { takeEvery, put, call } from "redux-saga/effects";
import {
  createBusiness as createBusinessService,
  getBusinessList as getBusinessListService,
  updateBusiness as updateBusinessService,
  deleteBusiness as deleteBusinessService,
  createBusinessPerson as createBusinessPersonService,
  getBusinessPersonsList as getBusinessPersonsListService,
  updateBusinessPerson as updateBusinessPersonService,
  deleteBusinessPerson as deleteBusinessPersonService,
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
  createBusinessPerson,
  createBusinessPersonSuccess,
  createBusinessPersonFailure,
  getBusinessPersonsList,
  getBusinessPersonsListSuccess,
  getBusinessPersonsListFailure,
  updateBusinessPerson,
  updateBusinessPersonSuccess,
  updateBusinessPersonFailure,
  deleteBusinessPerson,
  deleteBusinessPersonSuccess,
  deleteBusinessPersonFailure,
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

export function* createBusinessPersonFn({
  payload,
}: ReturnType<typeof createBusinessPerson>) {
  try {
    const { businessId, person } = payload;
    const { data } = yield call(
      createBusinessPersonService,
      businessId,
      person
    );
    if (data) {
      yield put(getBusinessPersonsList({ businessId }));
      yield put(createBusinessPersonSuccess());
    } else {
      yield put(createBusinessPersonFailure());
    }
  } catch (e) {
    yield put(createBusinessPersonFailure());
  }
}

export function* getBusinessPersonsListFn({
  payload,
}: ReturnType<typeof getBusinessPersonsList>) {
  try {
    const { businessId } = payload;
    const { data } = yield call(getBusinessPersonsListService, businessId);
    if (data) {
      const { persons: personsList } = data;
      yield put(getBusinessPersonsListSuccess({ businessId, personsList }));
    } else {
      yield put(getBusinessPersonsListFailure());
    }
  } catch (e) {
    yield put(getBusinessPersonsListFailure());
  }
}

export function* updateBusinessPersonFn({
  payload,
}: ReturnType<typeof updateBusinessPerson>) {
  try {
    const { businessId, personId, person } = payload;
    const { data: personResult } = yield call(
      updateBusinessPersonService,
      businessId,
      personId,
      person
    );
    if (personResult) {
      yield put(
        updateBusinessPersonSuccess({
          businessId,
          personId,
          person: personResult,
        })
      );
    } else {
      yield put(updateBusinessPersonFailure());
    }
  } catch (e) {
    yield put(updateBusinessPersonFailure());
  }
}

export function* deleteBusinessPersonFn({
  payload,
}: ReturnType<typeof deleteBusinessPerson>) {
  try {
    const { businessId, personId } = payload;
    const { data } = yield call(
      deleteBusinessPersonService,
      businessId,
      personId
    );
    if (data) {
      yield put(getBusinessPersonsList({ businessId }));
      yield put(deleteBusinessPersonSuccess());
    } else {
      yield put(deleteBusinessPersonFailure());
    }
  } catch (e) {
    yield put(deleteBusinessPersonFailure());
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

export function* watchCreateBusinessPerson() {
  yield takeEvery(createBusinessPerson, createBusinessPersonFn);
}
export function* watchGetBusinessPersonsList() {
  yield takeEvery(getBusinessPersonsList, getBusinessPersonsListFn);
}
export function* watchUpdateBusinessPerson() {
  yield takeEvery(updateBusinessPerson, updateBusinessPersonFn);
}
export function* watchDeleteBusinessPerson() {
  yield takeEvery(deleteBusinessPerson, deleteBusinessPersonFn);
}
