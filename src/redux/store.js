// add midleware to store
// between actions & root reducer
import { createStore, applyMiddleware} from 'redux';
// debuggin
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware setup
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;