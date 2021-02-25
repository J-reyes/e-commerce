// add midleware to store
// between actions & root reducer
import { createStore, applyMiddleware } from "redux";
// redux persist
import { persistStore } from "redux-persist";
// debuggin
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// middleware setup
const middlewares = [];

// make sure to only output logs when in dev environment
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
