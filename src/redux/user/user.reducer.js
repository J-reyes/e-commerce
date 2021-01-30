// store user state
// get state object (last or initial) & a action

import {UserActionTypes} from './user.types';

// set initial state
const INITIAL_STATE = {
  currentUser: null,
};

// state will come from store
// state will = to what ever the state is when the action is triggered
const userReducer = (state = INITIAL_STATE, action) => {
  // can pass ^^ a default value
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
