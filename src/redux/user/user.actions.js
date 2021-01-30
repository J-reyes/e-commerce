import {UserActionTypes} from './user.types';
export const setCurrentUser = user => ({
  // make sure it matches case from user.reducer
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});