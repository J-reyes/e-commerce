// store user state
// get state object (last or initial) & a action

import UserActionTypes from "./user.types";

// set initial state
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

// state will come from store
// state will = to what ever the state is when the action is triggered
const userReducer = (state = INITIAL_STATE, action) => {
  // can pass ^^ a default value
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
