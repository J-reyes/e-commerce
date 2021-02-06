import { createSelector } from "reselect";

// input selector -> return a slice of state
const selectCart = (state) => state.cart;

// since createSelector was used
// selectCartitems is now a memoize selector
// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    // returns total quantity of cartItems now
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
