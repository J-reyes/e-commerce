import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItems.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// Get whole state instead of just a slice
// { cart: { cartItems } } is now just state
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
