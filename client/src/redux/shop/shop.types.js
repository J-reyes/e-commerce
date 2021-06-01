// Multiple states ShopAction can bbe in
const ShopActionTypes = {
  // Start of our collection fetch
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  // success comes back with a successfull api request
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  // if thhere is an error with our api call
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLELCTIONS_FAILURE'
}

export default ShopActionTypes;
