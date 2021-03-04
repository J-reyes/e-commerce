import React from "react";

import "./checkout-item.styles.scss";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckOutItemContainer,
  ImageContainer,
  TextSpan,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

// pass in full item instead of spreading props & spread its objects
const checkoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckOutItemContainer>
      <ImageContainer >
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextSpan>{name}</TextSpan>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextSpan>{price}</TextSpan>
      <RemoveButtonContainer className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(checkoutItem);
