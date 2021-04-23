// import affects from sagas - to do different things w/ the store
// creating actions or listening for actions
import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  // will pause whenever a specific actioon comes in
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
