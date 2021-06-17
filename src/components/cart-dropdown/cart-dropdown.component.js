import React, { useContext } from "react";
// Higher order component
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.providers";

import {
  CartDropDownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessage
} from "./cart-dropdown.styles";

const CartDropDown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItems.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      {/* history.push comes from our withRouter HOC */}
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden(); // short hand dispatch
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropDownContainer>
  );
};

export default withRouter(CartDropDown);
