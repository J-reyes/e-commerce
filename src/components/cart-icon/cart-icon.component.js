import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// redux action
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


import { CartContainer, ItemCountContainer, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // function that triggers dispatch of toggleCartHidden
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  // creating a selector
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
