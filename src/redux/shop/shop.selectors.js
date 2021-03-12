import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// convert our newly created data shop object into an array
export const selectCollectionsForPerview = createSelector(
  [selectCollections],
  // get all keys and are returned in an array format
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

// selector for mmatching category
// pass in the URL params as collectionUrlParam which is a string
export const selectCollection = memoize((collectionUrlParam) =>
  // currying function
  createSelector(
    [selectCollections],
      // get the correct collection using te key in our shop data file
      (collections) => collections ? collections[collectionUrlParam] : null
  )
);
