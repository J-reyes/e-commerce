import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// Higher order component
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartContext } from "../../providers/cart/cart.providers";

import {
  CartDropDownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessage
} from "./cart-dropdown.styles";

const CartDropDown = ({ history, dispatch }) => {
  const { cartItems } = useContext(CartContext);

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
          dispatch(toggleCartHidden()); // short hand dispatch
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropDownContainer>
  );
};

export default withRouter(CartDropDown);
