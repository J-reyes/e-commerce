export const setCurrentUser = user => ({
  // make sure it matches case from user.reducer
  type: 'SET_CURRENT_USER',
  payload: user
})