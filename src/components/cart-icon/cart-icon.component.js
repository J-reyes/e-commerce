import React, {useContext} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartContext from "../../contexts/cart/cart.context";

// redux action
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


import { CartContainer, ItemCountContainer, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext)
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  // creating a selector
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
