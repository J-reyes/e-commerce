import { createSelector } from "reselect";

// maps the string value to the respective id
// were string value = the actual property
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mems: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// selector for mmatching category
// pass in the URL params as collectionUrlParam which is a string
export const selectCollection = (collectionUrlParam) =>
// queried function
  createSelector(
    [selectCollections],
    // will runs till the .find() returns true and will give us that element
    (collections) =>
      collections.find(
        (collections) =>
          collections.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  ); 
