import {CartActionTypes} from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload - is an optional property
});

export const addItem = item => ({
  // type is the action(function) we will perform
  type: CartActionTypes.ADD_ITEM,
  // payload is the item we want to add to our cart array
  payload: item
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})