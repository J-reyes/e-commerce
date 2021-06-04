import { createContext } from "react";

const CartContext = createContext({
  // set default value
  // + function that will end up updating the
  // value will be set inside a different component
  hidden: true,
  // empty function bcuz null obbjects can't be invoked
  toggleHidden: () => {},
});

export default CartContext;
