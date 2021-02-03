import {CartActionTypes} from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  //zero items by default
  cartItems: []
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
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      } 
    default:
      return state;
  }
}

export default cartReducer;