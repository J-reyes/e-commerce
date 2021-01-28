// base reducer object that repre all of the state of our app
// combines all of the other states together
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});