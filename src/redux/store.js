// add midleware to store
// between actions & root reducer
import { createStore, applyMiddleware } from "redux";
// redux persist
import { persistStore } from "redux-persist";
// debuggin
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
// import sagas
import { fetchCollectionsStart } from "./shop/shop.sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

// middleware setup
const middlewares = [sagaMiddleware];

// make sure to only output logs when in dev environment
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// add in individual sagas we are going to write
sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store);

export default { store, persistor };
