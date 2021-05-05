// import affects from sagas - to do different things w/ the store
// creating actions or listening for actions
import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectinosSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    // comes back in a promise form
    const snapshot = yield collectionRef.get();
    // first arg - is a method, second is the params we are passing
    const collectionsMap = yield call(
      convertCollectinosSnapshotToMap,
      snapshot
    );
    // dispatched out an object
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  // will pause whenever a specific actioon comes in
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}