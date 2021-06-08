import React, { createContext, useState, useEffect } from "react";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

export const CartContext = createContext({
  // set default value
  // + function that will end up updating the
  // value will be set inside a different component
  hidden: true,
  // empty function bcuz null obbjects can't be invoked
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  // actual cart count displayed in the header
  cartItemsFromCart: 0,
});

// children will be all components being wrapped
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // addItemToCart takes existing items we have & then adds the item into it
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  // toggle to opposite value + gets passed as the new function
  // inside our cart.context
  const toggleHidden = () => setHidden(!hidden);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider