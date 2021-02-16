// base reducer object that repre all of the state of our app
// combines all of the other states together
import { combineReducers } from "redux";
// redix-persist
import { persistReducer } from "redux-persist";
// type of storage -> use local storage as default storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

// persist config we want redux-persist to use
const persistConfig = {
  key: "root",
  storage,
  // contains the name of the reducers we want to store(persist)
  whitelist: ["cart"],
};

// setting root reduxer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
