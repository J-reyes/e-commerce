// store user state
// get state object (last or initial) & a action

import UserActionTypes from './user.types';

// set initial state
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

// state will come from store
// state will = to what ever the state is when the action is triggered
const userReducer = (state = INITIAL_STATE, action) => {
  // can pass ^^ a default value
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
