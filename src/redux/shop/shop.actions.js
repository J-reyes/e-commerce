import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectinosSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsStartAsync = () => {
  // returning function that gets a dispatch
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    // dispatch start call
    dispatch(fetchCollectionsStart());

    // gets data associated to collectionRef
    // using .then() bbecause now it is a promise
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectinosSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    });
  };
};
