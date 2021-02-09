import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// Higher order component
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItems.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {/* history.push comes from our withRouter HOC */}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden()); // short hand dispatch
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// Get whole state instead of just a slice
// { cart: { cartItems } } is now just state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
