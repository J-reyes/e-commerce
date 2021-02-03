// create any utility function related to our cart redux code

// takes in any existing cartItems + cartItem that we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // return new array / we don't want to modify our original array
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? // create a new object
          { ...cartItem, quantity: cartItem.quantity + 1 }
          // return original cart item
        : cartItem
    );
  }

  // if existing object is not found
  // will always run first since existingCartItem wont exist just yet
  return [...cartItems, {...cartItemToAdd, quantity: 1 }]
};
