import {CartActionTypes} from './cart.types';

const INITIAL_STATE = {
  hidden: true,
};

// state = to default state if we have not value
const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // convert to opposite of curent value
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;